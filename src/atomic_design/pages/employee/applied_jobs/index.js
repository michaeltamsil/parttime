import React, { Component } from 'react'
import {Button, Col, NavLink, Row, Table } from 'reactstrap'

import confirm from '../../../atoms/confirm';

class Index extends Component {

  constructor(props){
    super(props)

    this.showConfirmDelete = this.showConfirmDelete.bind(this)
  }

  showConfirmDelete(){
    confirm('Do you want to delete this applied job?', {
      type: 'delete',
      proceed: function(message){
        console.log('proceed');
      },
      cancel: function(message){
        console.log('cancel');
      },
      dismiss: function(){
        console.log('tertutup')
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
                <td><NavLink href="https://www.facebook.com/chyanchyan" target="_blank">Chyndian</NavLink></td>
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
                <td><NavLink href="https://www.facebook.com/michael.tamsil" target="_blank">Michael Tamsil</NavLink></td>
                <td>Applied</td>
                <td><Button color="danger" size="sm" onClick={this.showConfirmDelete}>Cancel</Button></td>
              </tr>
              <tr className="text-muted">
                <td>Monday - Friday</td>
                <td>2PM - 7PM</td>
                <td>Juli 1ˢᵗ - 31ᵗʰ 2018</td>
                <td>salesman</td>
                <td>engage customer to buy a car</td>
                <td>USD 5/hour</td>
                <td>Car Showroom Batam, kepulauan riau</td>
                <td><NavLink href="https://www.facebook.com/darvin.sinaga1" target="_blank">Darvin</NavLink></td>
                <td>Rejected</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>);
  }
}
export default Index;
