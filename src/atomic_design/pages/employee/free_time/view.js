import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button, Col, Container, Nav, NavItem, Row, Table } from 'reactstrap';

class Index extends Component {

  constructor(props) {
    super(props)
    console.log(props);
    this.delete = this.delete.bind(this)
  }

  delete() {

  }
  
  render = () => {
    return (<Container>
      <Row className="mt-3">
        <Col sm="4">
          <Button className="mr-3 active" color="primary" size="sm">Employee</Button>
          <Button color="primary" size="sm">Employer</Button>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Nav tabs>
            <NavItem>
              <NavLink className="nav-link" to="/employee/profile">Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/employee/free_time">Free Time</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/employee/jobs">Jobs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/employee/applied_jobs">Applied Jobs</NavLink>
            </NavItem>
          </Nav>
        </Col>
      </Row>
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
    </Container>);
  }
}
export default connect()(Index);
