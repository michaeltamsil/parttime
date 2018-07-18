import React from 'react'
import { confirmable } from 'react-confirm';
import { Button,Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const Confirmable = ({show, proceed, dismiss, cancel, confirmation, options}) => {
<div onHide={dismiss} show={show}>
    {confirmation}
    <button onClick={() => cancel('arguments will be passed to the callback')}>CANCEL</button>
    <button onClick={() => proceed('same as cancel')}>OK</button>
</div>
}

export default confirmable(Confirmable)