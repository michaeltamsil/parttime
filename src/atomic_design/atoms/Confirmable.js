import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { confirmable } from 'react-confirm';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

class Confirmable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: true
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle(doNext = undefined) {
    this.setState({
      modal: !this.state.modal
    })
    
    if (doNext){
      if(typeof doNext == 'function'){
        doNext();
      }else{
        this.props.cancel();
      }
    }
  }
  
  render() {
    const {
      cancel, confirmation, dismiss,proceed, type
    } = this.props;
    let buttonColor = 'primary',
    buttonText = 'Yes',
    modalHeaderClassName =''
    
    if (type == 'delete'){
      buttonColor = 'danger'
      buttonText = 'Delete'
      modalHeaderClassName='bg-danger text-white'
    }

    return (
      <Modal onClosed={dismiss} isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader className={modalHeaderClassName} toggle={this.toggle}>Confirmation</ModalHeader>
        <ModalBody>
          {confirmation}
        </ModalBody>
        <ModalFooter>
          <Button color="light" onClick={() => this.toggle(cancel)}>Cancel</Button>
          <Button color={buttonColor} onClick={() => this.toggle(proceed)}>{buttonText}</Button>
        </ModalFooter>
      </Modal>
    )
  }
}
export default confirmable(Confirmable)