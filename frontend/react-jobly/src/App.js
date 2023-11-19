import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import RoutePaths from './RoutePaths';
import NavBar from './NavBar';
import JoblyApi from './api';

function App() {
  const [token, setToken] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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



  return (
    <div className="App">
      <BrowserRouter>
        <NavBar logout={logout}/>
        <RoutePaths login={login} signup={signup}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
