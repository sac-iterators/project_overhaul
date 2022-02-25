import Modal from 'react-bootstrap/Modal'
import {Button} from 'react-bootstrap';
import { useState, ReactDOM} from 'react';
import ReservationForm from './ReservationForm';
import {createReserv} from './ReservationForm';
import React from 'react';


function ReservationButton() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  
    return (
      <>
        <a href='#' onClick={handleShow}>
          Reservations
        </a>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Reservation Sign Up</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <ReservationForm />
          </Modal.Body>

          {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={ReservationForm.createReserv}>
              Reserve
            </Button>
          </Modal.Footer> */}
        </Modal>
      </>
    );
  }
  
// render(<ReservationButton />);
export default ReservationButton;