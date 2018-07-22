import React, { Component } from 'react'
import {Col, Row, Table } from 'reactstrap'

class Index extends Component {
  
  render = () => {
    return (<div>
      <Row>
        <Col className="mt-4">
          <Table striped>
            <thead>
              <tr>
                <th>Days</th>
                <th>Time</th>
                <th>Date</th>
                <th>Position</th>
                <th>Description</th>
                <th>Salary</th>
                <th>Location</th>
                <th>Employer</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="small">
              <tr>
                <td>Minday / Tuesday / Wednesday</td>
                <td>2PM - 7PM</td>
                <td>July 1st - 31th 2018</td>
                <td>Waitress</td>
                <td>Take order / serve dished / pickup ...</td>
                <td>Rp 10K / day</td>
                <td> Godiva Coffee Nagoya hill</td>
                <td>Darvin Yuhuuu</td>
                <td>Pending</td>
              </tr>
              <tr>
                <td>Saturday / Sunday</td>
                <td>9PM - 9PM</td>
                <td>July 1s - 31th 2018</td>
                <td>Waitress</td>
                <td>Take order / serve dished / pickup ...</td>
                <td> Rp 20k / day</td>
                <td>Godiva Coffe Nagoya Hill</td>
                <td>Darvin Yuhuuu</td>
                <td>Approved</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>);
  }
}
export default Index;
