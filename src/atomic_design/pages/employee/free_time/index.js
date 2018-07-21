import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Col, Row, Table } from 'reactstrap';

import create from './create';
import edit from './edit';
import confirm from '../../../atoms/confirm';

class Index extends Component {

  constructor(props) {
    super(props)

    this.showCreate = this.showCreate.bind(this)
    this.showEdit = this.showEdit.bind(this)
    this.showConfirmDelete = this.showConfirmDelete.bind(this)
  }

  showCreate() {
    create({
      proceed: () => {
        console.log('proceed');
      },
      cancel: () => {
        console.log('cancel')
      },
      dismiss: () => {
        console.log('tertutup');
      }
    })
  }

  showEdit() {
    edit({
      proceed: function(message){
        console.log('proceed');
      },
      cancel: function(message){
        console.log('cancel')
      },
      dismiss: function(){
        console.log('tertutup');
      }
    })
  }

  showConfirmDelete(){

    confirm('Do you want to delete this free time?', {
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
        <Col>
        <Button color="success" size="sm" onClick={this.showCreate}>Create</Button>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <Table striped size="sm">
            <thead>
              <tr>
                <th>Day</th>
                <th>Time</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monday</td>
                <td>2PM - 7PM</td>
                <td>Available</td>
                <td>
                  <button className="btn btn-warning btn-sm mr-2 text-white" onClick={this.showEdit}>Edit</button>
                  <button className="btn btn-danger btn-sm" onClick={this.showConfirmDelete}>Delete</button>
                </td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>3PM - 9PM</td>
                <td>Available</td>
                <td>
                  <button className="btn btn-warning btn-sm mr-2 text-white">Edit</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>2PM - 7PM</td>
                <td>Hired</td>
                <td>
                  <button className="btn btn-warning btn-sm mr-2 text-white">Edit</button>
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
