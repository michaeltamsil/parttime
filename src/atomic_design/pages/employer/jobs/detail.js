import React, { Component } from 'react';
import { confirmable, createConfirmation } from 'react-confirm';
import { Button, ButtonGroup, Col, Form, FormGroup, Input, Label,
  Modal, ModalBody, ModalFooter, ModalHeader, NavLink, Table
} from 'reactstrap';

class Detail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modal: true
    }
    this.proceed = this.proceed.bind(this)
    this.cancel = this.cancel.bind(this)
  }

  proceed() {
    this.setState({
      modal: false
    })
    this.props.proceed && this.props.proceed()
  }

  cancel() {
    this.setState({
      modal: false
    })
    this.props.cancel && this.props.cancel()
  }

  render = () => {
    const { dismiss } = this.props
  return (<Modal onClosed={dismiss} isOpen={this.state.modal} toggle={this.cancel} backdrop="static">
      <ModalHeader className="bg-primary text-white" toggle={this.cancel}>Applier</ModalHeader>
      <ModalBody>
          <Table size="sm">
            <thead>
              <tr>
                <td>Name</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <NavLink href="https://www.facebook.com/bobbyprimairya" target="_blank">Bobby</NavLink>
                </td>
                <td>
                  <ButtonGroup>
                    <button className="btn btn-success btn-sm mr-2">Deal</button>
                    <button className="btn btn-secondary btn-sm">Reject</button>
                  </ButtonGroup>
                </td>
              </tr>
              <tr>
                <td><NavLink href="https://www.facebook.com/elfathdreams" target="_blank">Amir</NavLink></td>
                <td>
                  <ButtonGroup>
                    <button className="btn btn-success btn-sm mr-2">Deal</button>
                    <button className="btn btn-danger btn-sm">Reject</button>
                  </ButtonGroup>
                </td>
              </tr>
              <tr>
                <td><NavLink href="https://www.facebook.com/mhaidarhanif" target="_blank">Haidar</NavLink></td>
                <td>
                  <ButtonGroup>
                    <button className="btn btn-secondary btn-sm mr-2">Deal</button>
                    <button className="btn btn-danger btn-sm">Reject</button>
                  </ButtonGroup>
                </td>
              </tr>
            </tbody>
          </Table>
      </ModalBody>
      <ModalFooter>
        <Button color="light" onClick={this.cancel}>Cancel</Button>{' '}
        <Button color="success" onClick={this.proceed}>Create</Button>
      </ModalFooter>
    </Modal>);
  }
}

const confirm = createConfirmation(confirmable(Detail))

export default function(options = {}){
  return confirm(options)
}