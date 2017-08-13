import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './Components/Navbar/Navbar';
import { Link } from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {/*<div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>*/}
        <div className="app-content">
          {/*<Link to="/">Home</Link>*/}
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
