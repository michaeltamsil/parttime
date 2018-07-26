import React, { Component } from 'react';
import { Button, ButtonGroup, Col, Row, Table } from 'reactstrap';

import create from './create';
import edit from './edit';
import detail from './detail';
import confirm from '../../../atoms/confirm';

class Index extends Component {

  constructor(props) {
    super(props)

    this.showCreate = this.showCreate.bind(this)
    this.showEdit = this.showEdit.bind(this)
    this.showDetail = this.showDetail.bind(this)
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

  showEdit(e) {
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

  showDetail(e) {    
    detail({
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

  showConfirmDelete(event){
    confirm('Do you want to delete this job?', {
      type: 'delete',
      dismiss: function(){
        console.log('tertutup')
      },
      proceed: function(message){
        console.log(message);
      },
      cancel: function(message){
        console.log(message);
      }
    }).then( (result) => {console.log(result);})
  }

  render = () => {

    return (<div>
      <Row>
        <Col>
          <Button color="success" size="sm" onClick={this.showCreate}>Create</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped size="sm">
            <thead>
              <tr>
                <th>Days</th>
                <th>Time</th>
                <th>Date</th>
                <th>Position</th>
                <th>Description</th>
                <th>Salary</th>
                <th>Location</th>
                <th>Status</th>
                <td></td>
              </tr>
            </thead>
            <tbody className="small">
              <tr>
                <td>Saturday, sunday</td>
                <td>2PM - 7PM</td>
                <td>July 1ˢᵗ - July31ˢᵗ 2018</td>
                <td>cleaning service</td>
                <td>cleaning the floor, window and gardening</td>
                <td>USD 3/hour</td>
                <td>Brunswick, Missouri, Kansas</td>
                <td>3 Apply</td>
                <td>
                  <ButtonGroup>
                    <button className="btn btn-primary btn-sm mr-2 text-white" onClick={this.showDetail}>Detail</button>
                    <button className="btn btn-warning btn-sm mr-2 text-white" onClick={this.showEdit}>Edit</button>
                    <button className="btn btn-danger btn-sm" onClick={this.showConfirmDelete}>Delete</button>
                  </ButtonGroup>
                </td>
              </tr>
              <tr>
                <td>monday, wednesday, friday</td>
                <td>8AM - 5PM</td>
                <td>July 1ˢᵗ - July31ˢᵗ 2018</td>
                <td>cleaning service</td>
                <td>cleaning the floor, window and gardening</td>
                <td>USD 1.5/hour</td>
                <td>Brunswick, Missouri, Kansas</td>
                <td>1 Deal, 4 Apply</td>
                <td>
                  <ButtonGroup>
                    <button className="btn btn-primary btn-sm mr-2 text-white" onClick={this.showDetail}>Detail</button>
                  </ButtonGroup>
                </td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>10PM - 2AM</td>
                <td>July 1ˢᵗ - July31ˢᵗ 2018</td>
                <td>cleaning service</td>
                <td>cleaning the floor, window and gardening</td>
                <td>USD 1.5/hour</td>
                <td>Brunswick, Missouri, Kansas</td>
                <td>0 applied</td>
                <td>
                <ButtonGroup>
                    <button className="btn btn-warning btn-sm mr-2 text-white">Edit</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </ButtonGroup>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>);
  }
}
export default Index;