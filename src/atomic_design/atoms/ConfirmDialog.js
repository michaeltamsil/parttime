import React from 'react'
import { confirmable } from 'react-confirm';
import { Button,Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const ConfirmDialog = ({show, proceed, dismiss, cancel, confirmation, options}) => {
<Dialog onHide={dismiss} show={show}>
    {confirmation}
    <button onClick={() => cancel('arguments will be passed to the callback')}>CANCEL</button>
    <button onClick={() => proceed('same as cancel')}>OK</button>
</Dialog>
}

export default confirmable(ConfirmDialog)