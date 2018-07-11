import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button, Col, Container, Form, FormGroup, Modal, ModalBody, ModalFooter, ModalHeader, Nav, NavItem, Row, Table } from 'reactstrap';

class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      backdrop: 'static'
    }
    this.add = this.add.bind(this)
    this.toggle = this.toggle.bind(this)
  }
  
  add(e) {
    this.setState({
      modal: !this.state.modal
    })
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }

  render = () => {
    return (<div>
      <Row>
        <Col>
          <Button color="primary" size="sm" onClick={this.add}>Add</Button>
        </Col>
      </Row>
      <Row>
        <Col className="mt-1123">
          <Table striped>
            <thead>
              <th>Days</th>
              <th>Time</th>
              <th>Status</th>
              <th>Action</th>
            </thead>
            <tbody>
              <tr>
                <td>Monday / Tuesday / Wednesday can</td>
                <td>2PM - 7PM</td>
                <td>Available</td>
                <td>
                  <button className="btn btn-primary btn-sm mr-2">Edit</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Thursday / Friday</td>
                <td>3PM - 9PM</td>
                <td>Available</td>
                <td>
                  <button className="btn btn-primary btn-sm mr-2">Edit</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Saturday / sunday</td>
                <td>2PM - 7PM</td>
                <td>Hired</td>
                <td>
                  <button className="btn btn-primary btn-sm mr-2">Edit</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>

      <Modal isOpen={this.state.modal} toggle={this.toggle} backdrop={this.state.backdrop}>
        <ModalHeader toggle={this.toggle}>Modal Title</ModalHeader>
        <ModalBody>
          Modal Body
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>);
  }
}
export default connect()(Index);
