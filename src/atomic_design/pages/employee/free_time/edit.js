import React, { Component } from 'react';
import { confirmable, createConfirmation } from 'react-confirm';
import { Button, Col, Form, FormGroup, Input, Label,
  Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';

import Day from './../../../atoms/Day'
import TimeStart from './../../../atoms/TimeStart'
import TimeEnd from './../../../atoms/TimeEnd'


class Edit extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modal: true
    }
    this.proceed = this.proceed.bind(this)
    this.cancel = this.cancel.bind(this)
  }

  proceed() {
    this.setState({
      modal: false
    })
    this.props.proceed && this.props.proceed()
  }

  cancel() {
    this.setState({
      modal: false
    })
    this.props.cancel && this.props.cancel()
  }

  render = () => {
    const { dismiss } = this.props;

    return (<Modal onClosed={dismiss} isOpen={this.state.modal} toggle={this.cancel} backdrop="static">
      <ModalHeader className="bg-warning text-white" toggle={this.cancel}>Edit Free Time</ModalHeader>
      <ModalBody>
      <Form>
          <FormGroup row>
            <Label sm={2}>Day</Label>
            <Col sm={10}>
              <Day/>
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
        <Button color="light" onClick={this.cancel}>Cancel</Button>{' '}
        <Button color="warning text-white" onClick={this.proceed}>Save</Button>
      </ModalFooter>
    </Modal>);
  }
}
const confirm = createConfirmation(confirmable(Edit))

export default function(options ={}){
  return confirm(options)
}