import React, { Component } from 'react';
import Login from '../Components/Login/Login';
class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}
export default Home;
