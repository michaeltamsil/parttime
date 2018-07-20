import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { confirmable } from 'react-confirm';
import { Button,Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

// const Confirmable = ({show, proceed, dismiss, cancel, confirmation, options}) => {<Modal onHide={dismiss} isOpen={show}>
//         {confirmation}
//         <button onClick={() => cancel('arguments will be passed to the callback')}>CANCEL</button>
//         <button onClick={() => proceed('same as cancel')}>OK</button>
//     </Modal>}

// Confirmable.propTypes = {
//     show: PropTypes.bool,            // from confirmable. indicates if the dialog is shown or not.
//     proceed: PropTypes.func,         // from confirmable. call to close the dialog with promise resolved.
//     cancel: PropTypes.func,          // from confirmable. call to close the dialog with promise rejected.
//     dismiss: PropTypes.func,         // from confirmable. call to only close the dialog.
//     confirmation: PropTypes.string,  // arguments of your confirm function
//     options: PropTypes.object        // arguments of your confirm function
//   }

// export default confirmable(Confirmable)

class Confirmable extends Component {
    render() {
        const {
            okLabbel = 'OK',
            cancelLabel = 'Cancel',
            title,
            confirmation,
            show,
            proceed,
            dismiss,
            cancel,
            enableEscape = true
        } = this.props;

        return (
            <Modal onHide={dismiss} isOpen={show}>
                {confirmation}
                <button onClick={() => cancel('arguments will be passed to the callback')}>CANCEL</button>
                <button onClick={() => proceed('same as cancel')}>OK</button>
            </Modal>
        )
    }
}

Confirmable.propTypes = {
    okLabbel: PropTypes.string,
    cancelLabel: PropTypes.string,
    title: PropTypes.string,
    confirmation: PropTypes.string,
    show: PropTypes.bool,
    proceed: PropTypes.func,     // called when ok button is clicked.
    cancel: PropTypes.func,      // called when cancel button is clicked.
    dismiss: PropTypes.func,     // called when backdrop is clicked or escaped.
    enableEscape: PropTypes.bool,
  }
  
  export default confirmable(Confirmable);