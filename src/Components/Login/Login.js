import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="login-container">
        <h1>STUDENT WEB GRADER</h1>
        {/*<div>*/}
        <form>
          <div className="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                class="form-control"
                id="inputEmail3"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                class="form-control"
                id="inputPassword3"
                placeholder="Password"
              />
            </div>
          </div>
          {/*<div className="form-group row">
              <label className="col-sm-2">Checkbox</label>
              <div className="col-sm-10">
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox">
                      {' '}Check me out
                    </input>
                  </label>
                </div>
              </div>
            </div>*/}
          <div className="form-group row">
            <div className="offset-sm-2 col-sm-10">
              <button type="submit" className="btn btn-primary">
                Sign in
              </button>
            </div>
          </div>
        </form>
        {/*</div>*/}
      </div>
    );
  }
}
export default Login;
