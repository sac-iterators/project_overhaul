import Modal from 'react-bootstrap/Modal'
import {Button} from 'react-bootstrap';
import { useState } from 'react';
import OrderForm from './OrderForm';

function OrderButton() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="outline-light" size="lg" onClick={handleShow}>Order Now</Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Choose Your Order Method</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <OrderForm />
          </Modal.Body>
        </Modal>
      </>
    );
  }
export default OrderButton;