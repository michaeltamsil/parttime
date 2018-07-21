import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Col, Container, Row, Table } from 'reactstrap';

import Create from './create';
import Edit from './edit';
import confirm from '../../../atoms/confirm';

class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showCreate: false,
      showEdit: false
    }

    this.showCreate = this.showCreate.bind(this)
    this.hideCreate = this.hideCreate.bind(this)
    this.showEdit = this.showEdit.bind(this)
    this.hideEdit = this.hideEdit.bind(this)
    this.showConfirmDelete = this.showConfirmDelete.bind(this)
  }

  showCreate() {
    this.setState({
      showCreate: true
    })
  }

  hideCreate(){
    this.setState({
      showCreate: false
    })
  }

  showEdit() {
    this.setState({
      showEdit: true
    })
  }

  hideEdit(){
    this.setState({
      showEdit: false
    })
  }

  showConfirmDelete(){

    confirm('Do you want to delete this free time?', {
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
                  <button className="btn btn-warning btn-sm mr-2 text-white" onClick={this.showEdit}>Edit</button>
                  <button className="btn btn-danger btn-sm" onClick={this.showConfirmDelete}>Delete</button>
                </td>
              </tr>
              <tr>
                <td>Thursday / Friday</td>
                <td>3PM - 9PM</td>
                <td>Available</td>
                <td>
                  <button className="btn btn-warning btn-sm mr-2 text-white">Edit</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Saturday / sunday</td>
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
      <Create isOpen={this.state.showCreate} hide={this.hideCreate} />
      <Edit isOpen={this.state.showEdit} hide={this.hideEdit} />
    </div>);

  }
}
export default connect()(Index);
