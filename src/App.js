import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Forms/Login/Login';
import Navbar from './Components/NavBar/Navbar/Navbar';
import SignUp from './Components/Forms/SignUp/SignUp';
import PDetails from './Components/Forms/PDetails/PDetails';
import BannerTag from './Components/BannerTag/BannerTag';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Navbar}/>
          <Route path="/" exact component={BannerTag}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/personal_details" component={PDetails} />
        </div>   
      </BrowserRouter>
    );
  }
}

export default App;
