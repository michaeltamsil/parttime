import React, { Component } from 'react';
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


  return (<Modal isOpen={this.state.modal} toggle={this.toggle} backdrop="static" size="lg">
      <ModalHeader className="bg-success text-white" toggle={this.toggle}>Create Job</ModalHeader>
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
            <Col  className="text-center" sm={3}>
              <TimeStart/>
            </Col>
            <Col className="text-center" sm={1}>to</Col>
            <Col className="text-center" sm={3}>
              <TimeEnd/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Start Date</Label>
            <Col className="text-center" sm={3}>
              <Input type="date" name="startDate"/>
            </Col>
            <Col className="text-center" sm={1}>to</Col>
            <Col className="text-center" sm={3}>
              <Input type="date" name="endDate"/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Position</Label>
            <Col sm>
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
            <Col sm={10}>
              <select>
                <option>USD</option>
                <option>IDR</option>
              </select>
              <nput type="text"/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Pay Period</Label>
            <Col sm={10}>
              <select>
                <option>Hourly</option>
                <option>per day</option>
              </select>
              <input type="text"/>
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
        <Button color="light" onClick={this.toggle}>Cancel</Button>{' '}
        <Button color="success" onClick={this.toggle}>Create</Button>
      </ModalFooter>
    </Modal>);
  }
}
export default Create;