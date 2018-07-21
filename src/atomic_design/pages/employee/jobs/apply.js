import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Col, CustomInput, Form, FormGroup, Input, Label,
  Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';

import Days from './../../../atoms/Days'
import TimeStart from './../../../atoms/TimeStart'
import TimeEnd from './../../../atoms/TimeEnd'


class Apply extends Component {

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
      <ModalHeader className="bg-success text-white" toggle={this.toggle}>Apply Job Detail</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup row>
            <Label sm={2}>Days</Label>
            <Col sm={10}>
              <Input plaintext>Monday, Tuesday, Wednesday</Input>
              <Days/>
            </Col>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="light" onClick={this.toggle}>Cancel</Button>{' '}
        <Button color="success" onClick={this.toggle}>Apply</Button>
      </ModalFooter>
    </Modal>);
  }
}
export default Apply;