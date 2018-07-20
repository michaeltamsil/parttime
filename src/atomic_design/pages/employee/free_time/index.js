import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button, Col, Container, Form, FormGroup, Nav, NavItem, Row, Table } from 'reactstrap';

import Create from './create';
import Edit from './edit';
import confirm from '../../../atoms/confirm';

class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showCreate: false,
      showEdit: false
    }

    this.showCreate = this.showCreate.bind(this)
    this.hideCreate = this.hideCreate.bind(this)
    this.showEdit = this.showEdit.bind(this)
    this.hideEdit = this.hideEdit.bind(this)
    this.showConfirmDelete = this.showConfirmDelete.bind(this)
  }

  showCreate() {
    this.setState({
      showCreate: true
    })
  }

  hideCreate(){
    this.setState({
      showCreate: false
    })
  }

  showEdit() {
    this.setState({
      showEdit: true
    })
  }

  hideEdit(){
    this.setState({
      showEdit: false
    })
  }

  showConfirmDelete(){

    confirm('test').then((result) => {console.log('success');},
      (result) => {console.log('cancel');})
  }

  render = () => {
    
    return (<div>
      <Row>
        <Col>
        <Button color="primary" size="sm" onClick={this.showCreate}>Create</Button>
        </Col>
      </Row>
      <Row>
        <Col className="mt-1123">
          <Table striped>
            <thead>
              <tr>
                <th>Days</th>
                <th>Time</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monday / Tuesday / Wednesday can</td>
                <td>2PM - 7PM</td>
                <td>Available</td>
                <td>
                  <button className="btn btn-warning btn-sm mr-2" onClick={this.showEdit}>Edit</button>
                  <button className="btn btn-danger btn-sm" onClick={this.showConfirmDelete}>Delete</button>
                </td>
              </tr>
              <tr>
                <td>Thursday / Friday</td>
                <td>3PM - 9PM</td>
                <td>Available</td>
                <td>
                  <button className="btn btn-warning btn-sm mr-2">Edit</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Saturday / sunday</td>
                <td>2PM - 7PM</td>
                <td>Hired</td>
                <td>
                  <button className="btn btn-warning btn-sm mr-2">Edit</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Create isOpen={this.state.showCreate} hide={this.hideCreate} />
      <Edit isOpen={this.state.showEdit} hide={this.hideEdit} />
    </div>);

  }
}
export default connect()(Index);
