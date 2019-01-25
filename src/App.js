import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login/Login';
import NavBar from './Components/NavBar/NavBar';
import LoginContainer from './Components/LoginContainer/LoginContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {/* <LoginContainer /> */}
        <Login />
      </div>
    );
  }
}

export default App;
