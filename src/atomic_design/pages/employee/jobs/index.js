import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Button, Col, Row, Table } from 'reactstrap'

import Apply from './apply';

class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showApply: false,
    }

    this.showApply = this.showApply.bind(this)
    this.hideApply = this.hideApply.bind(this)
  }

  showApply() {
    this.setState({
      showApply: true
    })
  }

  hideApply(){
    this.setState({
      showApply: false
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
                <td>Monday / Tuesday / Wednesday</td>
                <td>2PM - 7PM</td>
                <td>Juli 1ˢᵗ - 31ᵗʰ 2018</td>
                <td>Waitress</td>
                <td>Take order / server dished / pickup ...</td>
                <td>Rp 10k / day</td>
                <td> Godiva Coffee Nagoya Hill</td>
                <td>Darvin Yuhuuu</td>
                <td>Available</td>
                <td><Button color="success" size="sm" onClick={this.showApply}>Apply</Button></td>
              </tr>
              <tr>
                <td>Saturday / Sunday</td>
                <td>9PM - 9PM</td>
                <td>July 1ˢᵗ - 31ᵗʰ 2018</td>
                <td>Waitress</td>
                <td>Take order / serve dishes / pickup dirty</td>
                <td>Rp 20k / day</td>
                <td>Godiva Coffee Nagoya Hill</td>
                <td>Darvin Yuhuuu</td>
                <td>Availabel</td>
                <td><Button color="success" size="sm">Apply</Button></td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Apply isOpen={this.state.showApply} hide={this.hideApply} />
    </div>);
  }
}
export default connect()(Index);
