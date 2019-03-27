import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Forms/Login/Login';
import SignUp from './Components/Forms/SignUp/SignUp';
import PDetails from './Components/Forms/PDetails/PDContainer';
import UserProfile from './Containers/UserProfile/UserProfile';
import Toolbar from './Components/NavBar/Toolbar';
import Home from './Containers/Home/Home';
import NSCform from './Components/Assets/NSC/NSCform/NSCform';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Toolbar}/>
          <Route path="/" exact component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/personal_details" component={PDetails} />
          <Route path="/user_profile" component={UserProfile} />
          {/* <NSCform /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;




// "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
// Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
// Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
// Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."