import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-modal-bootstrap';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleClickTr = this.handleClickTr.bind(this);
  }

  openModal() {
    this.setState({
      isOpen: true
    });
  }

  hideModal() {
    this.setState({
      isOpen: false
    });
  }

  handleClickTr(event) {
    console.log(event);
    this.setState({
      isOpen: true
    });
  }

  render() {
    return (
      <div className="login-container">
        <h1>STUDENT WEB GRADER</h1>
        {/*<div>*/}
        <form className="formm">
          <div className="form-group row">
            {/*<label for="inputEmail3" class="col-sm-2 col-form-label">
              Email
            </label>*/}
            <div className="col-sm-12">
              <input
                type="email"
                class="form-control"
                id="inputEmail3"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="form-group row">
            {/*<label for="inputPassword3" class="col-sm-2 col-form-label">
              Password
            </label>*/}
            <div className="col-sm-12">
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
            <div className="offset-sm-1 col-sm-10">
              <button
                type="submit"
                className="btn btn-primary"
                href="/classroom"
              >
                Sign in
              </button>
            </div>
          </div>
          <div className="form-group row">
            <div className="offset-sm-1 col-sm-10">
              <a onClick={() => this.openModal()}>Register</a>
            </div>
          </div>
        </form>
        <Modal
          isOpen={this.state.isOpen}
          onRequestHide={this.hideModal}
          /* className="modal_employee" */
        >
          <ModalHeader>
            <ModalTitle>Register</ModalTitle>
            <ModalClose onClick={this.hideModal} />
          </ModalHeader>
          <ModalBody>
            <form>
              <FormGroup>
                <FormControl type="text" placeholder="Fisrtname" />
              </FormGroup>
              <FormGroup>
                <FormControl type="text" placeholder="Lastname" />
              </FormGroup>
              <FormGroup>
                <FormControl type="text" placeholder="Username" />
              </FormGroup>
              <FormGroup>
                <FormControl
                  type="text"
                  placeholder="Student ID (Ex. 5713XXX)"
                />
              </FormGroup>
              <FormGroup controlId="formControlsSelect">
                <FormControl componentClass="select" placeholder="select">
                  <option value="">Department</option>
                  <option value="egbme">Biomedical Engineering</option>
                  <option value="egce">Civil Engineering</option>
                  <option value="egche">Chemical Engineering</option>
                  <option value="egco">Computer Engineering</option>
                  <option value="egee">Electrical Engineering</option>
                  <option value="egie">Industrial Engineering</option>
                  <option value="egme">Mechanical Engineering</option>
                </FormControl>
              </FormGroup>
              <FormGroup>
                <FormControl type="email" placeholder="E-mail" />
              </FormGroup>
              <FormGroup>
                <FormControl type="password" placeholder="Password" />
              </FormGroup>
              <FormGroup>
                <FormControl type="password" placeholder="Confirm Password" />
              </FormGroup>
            </form>
            <Button
              className="pull-right"
              bsStyle="success"
              onClick={this.hideModal}
            >
              Create Account
            </Button>
          </ModalBody>
        </Modal>
        {/*</div>*/}
      </div>
    );
  }
}
export default Login;
