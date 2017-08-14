import React, { Component } from 'react';
import './SelectClassroom.css';
import { Button } from 'react-bootstrap';
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
      <div className="container">
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
            <ModalClose onClick={this.hideModal} />
            <ModalTitle />
          </ModalHeader>
          <ModalBody>
            <p>EGCO111 Computer Programming</p>
            <select className="pull-left">
              <option value="">Please select section</option>
              <option value="">Monday 9.00-12.00</option>
              <option value="">Tuesday 9.00-12.00</option>
              <option value="">Friday 13.00-16.00</option>
            </select>
            <br />
            <p className="pull-left">Password:</p>{' '}
            <input className="pull-left" type="password" />
            <br />
            <Button
              className="pull-right"
              bsStyle="success"
              onClick={this.hideModal}
            >
              OK
            </Button>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default SelectClassroom;
