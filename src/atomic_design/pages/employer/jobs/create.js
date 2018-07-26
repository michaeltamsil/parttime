import React, { Component } from 'react';
import { confirmable, createConfirmation } from 'react-confirm';
import { Button, Col, Form, FormGroup, Input,
  InputGroup, InputGroupAddon, Label,
  Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';

import Days from './../../../atoms/Days'
import TimeStart from './../../../atoms/TimeStart'
import TimeEnd from './../../../atoms/TimeEnd'


class Create extends Component {

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
    const { dismiss } = this.props
  return (<Modal onClosed={dismiss} isOpen={this.state.modal} toggle={this.cancel} backdrop="static" size="lg">
      <ModalHeader className="bg-success text-white" toggle={this.cancel}>Create Job</ModalHeader>
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
            <Col sm={10}>
              <TimeStart/>{' to '}<TimeEnd/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Start Date</Label>
            <Col sm={10}>
              <div style={{display:"inline-block"}}>
                <Input type="date" name="startDate"/>
              </div>
              {' to '}
              <div style={{display:"inline-block"}}>
                <Input type="date" name="endDate"/>
              </div>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Position</Label>
            <Col sm={6}>
              <Input name="position"/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Description</Label>
            <Col sm>
              <Input type="textarea"/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Salary</Label>
            <Col sm={4}>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <select className="form-control">
                    <option>USD</option>
                    <option>IDR</option>
                  </select>
                </InputGroupAddon>
                <Input type="number"/>
              </InputGroup>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Pay Period</Label>
            <Col sm={2}>
                <Input type="select">
                  <option>Hourly</option>
                  <option>per day</option>
                </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Location</Label>
            <Col sm={10}>
              <Input type="textarea"/>
            </Col>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="light" onClick={this.cancel}>Cancel</Button>{' '}
        <Button color="success" onClick={this.proceed}>Create</Button>
      </ModalFooter>
    </Modal>);
  }
}

const confirm = createConfirmation(confirmable(Create))

export default function(options = {}){
  return confirm(options)
}