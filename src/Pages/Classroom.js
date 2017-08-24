import React, { Component } from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import SelectClasssroom from '../Components/SelectClassroom/SelectClassroom';

class Classroom extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Sidebar />
        <SelectClasssroom />
      </div>
    );
  }
}
export default Classroom;
