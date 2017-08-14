import React, { Component } from 'react';
import SelectClassroom from '../Components/SelectClassroom/SelectClassroom';
class Classroom extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <SelectClassroom />
      </div>
    );
  }
}
export default Classroom;
