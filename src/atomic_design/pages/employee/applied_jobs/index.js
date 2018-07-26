import React, { Component } from 'react'
import {Button, Col, Row, Table } from 'reactstrap'

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
                <td>Saturday / Sunday</td>
                <td>9PM - 9AM</td>
                <td>July 1ˢᵗ - 31ᵗʰ 2018</td>
                <td>Waitress</td>
                <td>Take order / serve dishes / clean table</td>
                <td>Rp 100k/day</td>
                <td>Godiva Coffee Nagoya Hill</td>
                <td>Chyndian</td>
                <td className="text-success">Deal</td>
                <td></td>
              </tr>
              <tr>
                <td>Monday / Tuesday / Wednesday</td>
                <td>2PM - 7PM</td>
                <td>Juli 1ˢᵗ - 31ᵗʰ 2018</td>
                <td>Waitress</td>
                <td>Take order / server dished / clean table</td>
                <td>USD 2/hour</td>
                <td>Rumah Makan Nasi Padang</td>
                <td>Michael Tamsil</td>
                <td>Applied</td>
                <td><Button color="danger" size="sm">Cancel</Button></td>
              </tr>
              <tr className="text-muted">
                <td>Monday - Friday</td>
                <td>2PM - 7PM</td>
                <td>Juli 1ˢᵗ - 31ᵗʰ 2018</td>
                <td>salesman</td>
                <td>engage customer to buy a car</td>
                <td>USD 5/hour</td>
                <td>Car Showroom Batam, kepulauan riau</td>
                <td>Darvin</td>
                <td>Rejected</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>);
  }
}
export default Index;
