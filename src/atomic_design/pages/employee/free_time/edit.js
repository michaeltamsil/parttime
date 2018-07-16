import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Col, CustomInput, Form, FormGroup, Input, Label,
  Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';

import Days from './../../../atoms/Days'
import TimeStart from './../../../atoms/TimeStart'
import TimeEnd from './../../../atoms/TimeEnd'


class Edit extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }

  render = () => {


  return (<div>
      <Modal isOpen={this.state.modal} toggle={this.toggle} backdrop="static">
        <ModalHeader toggle={this.toggle}>Add Free Time</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
              <Label sm={2}>Days</Label>
              <Col sm={10}>
                <Days/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Time</Label>
              <Col sm={4}>
                <TimeStart/>
              </Col>
              <Col className="text-center" sm={1}>-</Col>
              <Col sm={4}>
                <TimeEnd/>
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={this.toggle}>Save</Button>{' '}
          <Button color="light" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>);
  }
}
export default Edit;