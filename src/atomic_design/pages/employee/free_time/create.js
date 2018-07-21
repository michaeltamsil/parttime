import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Col, CustomInput, Form, FormGroup, Input, Label,
  Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';

import Days from './../../../atoms/Days'
import TimeStart from './../../../atoms/TimeStart'
import TimeEnd from './../../../atoms/TimeEnd'


class Create extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modal: this.props.isOpen || false
    }

    this.toggle = this.toggle.bind(this)
  }

  componentDidUpdate(prevProps){
    if (prevProps.isOpen != this.props.isOpen){
      this.setState({modal: this.props.isOpen})
    }
  }

  toggle() {
    this.props.hide()
  }

  render = () => {


  return (<Modal isOpen={this.state.modal} toggle={this.toggle} backdrop="static">
      <ModalHeader className="bg-success text-white" toggle={this.toggle}>Create Free Time</ModalHeader>
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
          <FormGroup row>
            <Label sm={2} for="status">Status</Label>
            <Col sm={10}>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id="status"/>{' '}
                  Available
                </Label>
              </FormGroup>
            </Col>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="light" onClick={this.toggle}>Cancel</Button>{' '}
        <Button color="success" onClick={this.toggle}>Create</Button>
      </ModalFooter>
    </Modal>);
  }
}
export default Create;