import React, { Component } from 'react';
import { Link } from 'react-router';
import './Navbar.css';
class Navbar extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  className() {
    const pathname = this.props.path;
    let classname = '';
    if (pathname === '/home') {
      classname = 'nav-item active';
    } else if (pathname === '/classroom') {
      classname = 'nav-item active';
    } else if (pathname === '/exam') {
      classname = 'nav-item active';
    } else {
      classname = 'nav-item';
    }

    return classname;
  }
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-light nav-app">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <a className="navbar-brand" href="#">
          <img src="/assets/img/appman-logo.png" alt="" width="100px" />
        </a>

        <div
          className="collapse navbar-collapse nav-menu"
          id="navbarTogglerDemo02"
        >
          <ul className="navbar-nav mr-auto mt-2 mt-md-0 pull-left">
            <li
              className={
                this.props.path === '/home' || this.props.path === '/'
                  ? 'nav-item active'
                  : 'nav-item'
              }
            >
              <a className="nav-link" href="/home">
                <i className="fa fa-home" /> Home
              </a>
            </li>
            <li
              className={
                this.props.path === '/classroom'
                  ? 'nav-item active'
                  : 'nav-item'
              }
            >
              <a className="nav-link" href="/classroom">
                <i className="fa fa-book" /> Classroom
              </a>
            </li>
            <li
              className={
                this.props.path === '/exam' ? 'nav-item active' : 'nav-item'
              }
            >
              <a className="nav-link" href="/exam">
                <i className="fa fa-briefcase" /> Exam
              </a>
            </li>
          </ul>
          <ul className="navbar-nav pull-right">
            <li
              className={
                this.props.path === '/projects' ? 'nav-item active' : 'nav-item'
              }
            >
              <div className="dropdown">
                <a
                  className="nav-link"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-cog" aria-hidden="true" /> Setting
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <label for="checkbox-1" className="checkbox-custom-label">
                    <a href="/setting/position">Login</a>
                  </label>
                  <br />
                  <label for="checkbox-1" className="checkbox-custom-label">
                    <a href="/setting/data">Edit</a>
                  </label>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <style jsx>
          {`
            .dropdown-menu {
              right: 0;
              left: inherit;
            }
            .dropdown-menu a {
              text-decoration: none;
              color: #2e4053;
            }
            .dropdown-menu a:hover {
              color: #dc3833;
            }
            a.nav-link {
              cursor: pointer;
            }
          `}
        </style>
      </nav>
    );
  }
}
export default Navbar;
