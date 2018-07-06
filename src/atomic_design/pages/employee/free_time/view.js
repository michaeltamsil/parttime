import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button, Col, Container, Nav, NavItem, Row, Table } from 'reactstrap';

class Index extends Component {

  constructor(props) {
    super(props)
    this.delete = this.delete.bind(this)
  }

  delete() {

  }
  
  render = () => {
    return (<div>
      <Row className="mt-4">
        <Col>
          <Button color="primary" size="sm">Add</Button>
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">
          <Table striped>
            <thead>
              <th>Days</th>
              <th>Time</th>
              <th>Status</th>
              <th>Action</th>
            </thead>
            <tbody>
              <tr>
                <td>Monday / Tuesday / Wednesday</td>
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
                  <button className="btn btn-primary btn-sm mr-2" onClick={this.delete()} >Edit</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>);
  }
}
export default connect()(Index);
