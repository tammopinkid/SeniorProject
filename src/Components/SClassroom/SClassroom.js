import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Button
} from 'react-bootstrap';
import './SClassroom.css';

class SClassroom extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    function FieldGroup({ id, label, help, ...props }) {
      return (
        <FormGroup controlId={id}>
          <ControlLabel>
            {label}
          </ControlLabel>
          <FormControl {...props} />
          {help &&
            <HelpBlock>
              {help}
            </HelpBlock>}
        </FormGroup>
      );
    }
    return (
      <div>
        <Sidebar />
        <div className="Submit-container">
          <h1>Submit File</h1>
          <form>
            <span className="pull-left">
              <FieldGroup
                id="formControlsFile"
                type="file"
                /* label="File"
            help="กรุณาเลือกไฟล์" */
              />
            </span>

            {/* <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Textarea</ControlLabel>
              <FormControl
                componentClass="textarea"
                placeholder="Write Something..."
              />
            </FormGroup> */}
            <div className="pull-right">
              <Button bsStyle="primary">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default SClassroom;
