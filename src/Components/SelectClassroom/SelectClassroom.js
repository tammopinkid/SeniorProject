import React, { Component } from 'react';
import './SelectClassroom.css';
import { Button, FormControl, FormGroup } from 'react-bootstrap';
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-modal-bootstrap';
class SelectClassroom extends Component {
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

  handleClickTr() {
    this.setState({
      isOpen: true
    });
  }

  render() {
    return (
      <div className="sc_container">
        <h1>Select Classroom</h1>
        <div className="rcorners">
          <p className="shifttop">EGCO111 Computer Programming</p>
          <div className="pull-right">
            <Button bsStyle="success" onClick={() => this.handleClickTr()}>
              Select
            </Button>
          </div>
        </div>
        <div className="rcorners">
          <p className="shifttop">EGCO112 Programming Techniques</p>
          <div className="pull-right">
            <Button bsStyle="success">Select</Button>
          </div>
        </div>
        <div className="rcorners">
          <p className="shifttop">EGCO213 Programming Paradigm</p>
          <div className="pull-right">
            <Button bsStyle="success">Select</Button>
          </div>
        </div>
        <div className="rcorners">
          <p className="shifttop">EGCO???</p>
          <div className="pull-right">
            <Button bsStyle="success">Select</Button>
          </div>
        </div>
        <div className="rcorners">
          <p className="shifttop">EGCO???</p>
          <div className="pull-right">
            <Button bsStyle="success">Select</Button>
          </div>
        </div>
        <Modal
          isOpen={this.state.isOpen}
          onRequestHide={this.hideModal}
          /* className="modal_employee" */
        >
          <ModalHeader>
            <ModalTitle>EGCO111 Computer Programming</ModalTitle>
            <ModalClose onClick={this.hideModal} />
          </ModalHeader>
          <ModalBody>
            <FormGroup controlId="formControlsSelect">
              <FormControl componentClass="select" placeholder="select">
                <option value="">Please select section</option>
                <option value="">Monday 9.00-12.00</option>
                <option value="">Tuesday 9.00-12.00</option>
                <option value="">Friday 13.00-16.00</option>
              </FormControl>
            </FormGroup>
            <FormGroup>
              <FormControl type="password" placeholder="Password" />
            </FormGroup>
            <Button
              className="pull-right"
              bsStyle="success"
              onClick={this.hideModal}
              href="/classroom/upload"
            >
              Join
            </Button>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default SelectClassroom;
