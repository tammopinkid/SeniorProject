import React, { Component } from 'react';
import App from '../App';
import Home from '../Pages/Home';
import Classroom from '../Pages/Classroom';
import SClassroom from '../Components/SClassroom/SClassroom';
import Upload from '../Components/Upload/Upload';
import Exam from '../Pages/Exam';
import { Router, Route, IndexRoute } from 'react-router';

const Routes = props =>
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home} />
      <Route path="classroom" component={Classroom} />
      <Route path="classroom/upload" component={Upload} />
      <Route path="classroom/sclassroom" component={SClassroom} />
      <Route path="exam" component={Exam} />
    </Route>
  </Router>;

export default Routes;
