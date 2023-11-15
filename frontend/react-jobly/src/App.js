import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import RoutePaths from './RoutePaths';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <RoutePaths />
      </BrowserRouter>
    </div>
  );
}

export default App;
