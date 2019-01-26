import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Forms/Login/Login';
import NavBar from './Components/NavBar/NavBar';
import SignUp from './Components/Forms/SignUp/SignUp';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={NavBar}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/signup" exact component={SignUp}/>
        </div>   
      </BrowserRouter>
    );
  }
}

export default App;
