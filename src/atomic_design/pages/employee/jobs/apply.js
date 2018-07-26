import React, { Component } from 'react';
import { confirmable, createConfirmation } from 'react-confirm';
// import { NavLink } from 'react-router-dom'
import { Button, Col, Form, FormGroup, Input, Label,
  Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';

class Apply extends Component {

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
      <ModalHeader className="bg-success text-white" toggle={this.cancel}>Apply Job Detail</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup row>
            <Label sm={3}>Days</Label>
            <Col>
              <Input plaintext>Monday</Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={3}>Time</Label>
            <Col sm>
              <Input plaintext>2PM - 7PM</Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={3}>Date</Label>
            <Col sm>
              <Input plaintext>July 1<sup>st</sup>, 2018 to July 31<sup>st</sup>, 2018</Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={3}>Position</Label>
            <Col sm>
              <Input plaintext>Bodyguard</Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={3}>Description</Label>
            <Col sm>
              <Input plaintext>protect customer</Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={3}>Salary</Label>
            <Col sm>
              <Input plaintext>USD 3/hour</Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={3}>Location</Label>
            <Col sm>
              <Input plaintext>Bank</Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={3}>Employer</Label>
            
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="light" onClick={this.cancel}>Cancel</Button>{' '}
        <Button color="success" onClick={this.proceed}>Apply this job</Button>
      </ModalFooter>
    </Modal>);
  }
}
{/* <NavLink className="nav-link" to="/employee/profile/" target="_blank">Hendra Ganteng</NavLink> */}
const confirm = createConfirmation(confirmable(Apply))

export default function(options = {}){
  return confirm(options)
}