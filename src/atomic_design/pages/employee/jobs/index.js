import React, { Component } from 'react'
import {Button, Col, Row, Table } from 'reactstrap'

import apply from './apply';

class Index extends Component {

  constructor(props) {
    super(props)

    this.showApply = this.showApply.bind(this)
  }

  showApply() {
    apply({
      proceed: () => {
        console.log('proceed')
      },
      cancel: () => {
        console.log('cancel')
      },
      dismiss: () => {

      }
    })
  }

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
                <th colSpan={2}>Status</th>
              </tr>
            </thead>
            <tbody className="small">

              <tr>
                <td>Monday</td>
                <td>2PM - 7PM</td>
                <td>Juli 1ˢᵗ - 31ᵗʰ 2018</td>
                <td>bodyguard</td>
                <td>protect customer</td>
                <td>USD 3/hour</td>
                <td>Rumah Makan Nasi Padang</td>
                <td>Michael Tamsil</td>
                <td>Available</td>
                <td><Button color="success" size="sm" onClick={this.showApply}>Apply</Button></td>
              </tr>
              <tr>
                <td>Monday - Friday</td>
                <td>7AM - 3PM</td>
                <td>August 1ˢᵗ - 31ᵗʰ 2018</td>
                <td>programmer</td>
                <td>Fullstack dev</td>
                <td>USD 5/hour</td>
                <td>at startup Properio</td>
                <td>Joko</td>
                <td>Available</td>
                <td><Button color="success" size="sm" onClick={this.showApply}>Apply</Button></td>
              </tr>
              
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>);
  }
}
export default Index;
