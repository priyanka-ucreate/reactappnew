import React, { Component } from 'react';
import logo from '../../images/logo.png';


class Header extends Component {

  render() {
    return (
        <header className="App-header">
          <div className="container">
          <img src={logo} className="App-logo" alt="logo" />
          </div>
        </header>  
    );
  }
}

export default Header;

