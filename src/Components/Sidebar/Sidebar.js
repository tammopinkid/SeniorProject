import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="Sidebar">
              <div
                className="col-md-12 col-xs-1 p-l-0 p-r-0 collapse in"
                id="sidebar"
              >
                <div className="list-group panel">
                  <a
                    href="#menu1"
                    className="list-group-item collapsed"
                    data-toggle="collapse"
                    data-parent="#sidebar"
                    aria-expanded="false"
                  >
                    <i className="fa fa-dashboard" />{' '}
                    <span className="hidden-sm-down">
                      EGCO111 Computer Programming
                    </span>{' '}
                  </a>
                  <div className="collapse" id="menu1">
                    <a
                      href="#menu1sub1"
                      className="list-group-item"
                      data-toggle="collapse"
                      aria-expanded="false"
                    >
                      Section : EGCO{' '}
                    </a>
                    <div className="collapse" id="menu1sub1">
                      <a
                        href="#"
                        className="list-group-item"
                        data-parent="#menu1sub1"
                      >
                        > Exam 1
                      </a>
                      <a
                        href="#"
                        className="list-group-item"
                        data-parent="#menu1sub1"
                      >
                        > Exam 2
                      </a>
                    </div>
                    <a
                      href="#menu1sub2"
                      className="list-group-item"
                      data-toggle="collapse"
                      aria-expanded="false"
                    >
                      Section : EGEE 1{' '}
                    </a>
                    <div className="collapse" id="menu1sub2">
                      <a
                        href="#"
                        className="list-group-item"
                        data-parent="#menu1sub2"
                      >
                        > Exam 1
                      </a>
                      <a
                        href="#"
                        className="list-group-item"
                        data-parent="#menu1sub2"
                      >
                        > Exam 2
                      </a>
                    </div>
                    <a
                      href="#menu1sub3"
                      className="list-group-item"
                      data-toggle="collapse"
                      aria-expanded="false"
                    >
                      Section : EGEE 2{' '}
                    </a>
                    <div className="collapse" id="menu1sub3">
                      <a
                        href="#"
                        className="list-group-item"
                        data-parent="#menu1sub3"
                      >
                        > Exam 1
                      </a>
                      <a
                        href="#"
                        className="list-group-item"
                        data-parent="#menu1sub3"
                      >
                        > Exam 2
                      </a>
                    </div>
                  </div>
                  <a
                    href="#menu2"
                    className="list-group-item collapsed"
                    data-toggle="collapse"
                    data-parent="#sidebar"
                    aria-expanded="false"
                  >
                    <i className="fa fa-film" />{' '}
                    <span className="hidden-sm-down">
                      EGCO112 Programming Techniques
                    </span>
                  </a>
                  <div className="collapse" id="menu2">
                    <a
                      href="#menu2sub1"
                      className="list-group-item"
                      data-toggle="collapse"
                      aria-expanded="false"
                    >
                      Section : EGCO{' '}
                    </a>
                    <div className="collapse" id="menu2sub1">
                      <a
                        href="#"
                        className="list-group-item"
                        data-parent="#menu2sub1"
                      >
                        > Exam 1
                      </a>
                      <a
                        href="#"
                        className="list-group-item"
                        data-parent="#menu2sub1"
                      >
                        > Exam 2
                      </a>
                    </div>
                  </div>
                  <a
                    href="#menu3"
                    className="list-group-item collapsed"
                    data-toggle="collapse"
                    data-parent="#sidebar"
                    aria-expanded="false"
                  >
                    <i className="fa fa-book" />{' '}
                    <span className="hidden-sm-down">
                      EGCO213 Programming Paradigms
                    </span>
                  </a>
                  <div className="collapse" id="menu3">
                    <a
                      href="#menu3sub1"
                      className="list-group-item"
                      data-toggle="collapse"
                      aria-expanded="false"
                    >
                      Section : EGCO{' '}
                    </a>
                    <div className="collapse" id="menu3sub1">
                      <a
                        href="#"
                        className="list-group-item"
                        data-parent="#menu3sub1"
                      >
                        > Exam 1
                      </a>
                      <a
                        href="#"
                        className="list-group-item"
                        data-parent="#menu3sub1"
                      >
                        > Exam 2
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Sidebar;
