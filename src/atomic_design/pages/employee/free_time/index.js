import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button, Col, Container, Form, FormGroup, Nav, NavItem, Row, Table } from 'reactstrap';

import Create from './create';
import Edit from './edit';

class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      edit:{
        show: false
      }
    }

    this.showEdit = this.showEdit.bind(this)
  }

  showEdit() {
    debugger;
    //this.setState( { this.state, showUpdate: true} )
  }


  render = () => {
    return (<div>
      <Row>
        <Col>
          <Create/>
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
                  <button className="btn btn-danger btn-sm">Delete</button>
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
      <Edit/>
    </div>);

  }
}
export default connect()(Index);
