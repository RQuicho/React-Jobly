import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import RoutePaths from './RoutePaths';
import NavBar from './NavBar';
import JoblyApi from './api';
import jwt from 'jsonwebtoken';
import UserContext from './UserContext';
import useLocalStorage from './hooks/useLocalStorage';


function App() {
  const [token, setToken] = useState(JoblyApi.token);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUserInfo = async () => {
      if (token) {
        try {
          let {username} = jwt.decode(token);
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getUser(username);
          setCurrentUser(currentUser);
        } catch(e) {
          console.error('Unable to get user info in App.js', e);
          setCurrentUser(null);
        }
      }
      setIsLoading(false);
    }
    setIsLoading(true);
    getUserInfo();
  }, [token]);

  const login = async (loginData) => {
    try {
      let token = await JoblyApi.login(loginData);
      setToken(token);
      return {success: true};
    } catch(e) {
      console.error('login failed', e);
      return {success: false, e};
    }
  }

  const logout = () => {
    setCurrentUser(null);
    setToken(null);
  }

  const signup = async (signupData) => {
    try {
      let token = await JoblyApi.signup(signupData);
      setToken(token);
      return {success: true};
    } catch(e) {
      console.error('signup failed', e);
      return {success: false, e};
    }
  }



  if(isLoading) {
    return <p>Loading &hellip;</p>
  }

  return (
    <BrowserRouter>
      <UserContext.Provider value={{currentUser, setCurrentUser}}>
        <div className="App">
          <NavBar logout={logout}/>
          <RoutePaths login={login} signup={signup}/>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
