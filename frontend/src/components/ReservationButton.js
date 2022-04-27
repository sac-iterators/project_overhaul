import Modal from 'react-bootstrap/Modal'
import { useState } from 'react';
import ReservationForm from './ReservationForm';
import React from 'react';


function ReservationButton(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
      <>
        <div id="reservationButton" onClick={handleShow}>Reserve</div>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Reservation Sign Up</Modal.Title>
          </Modal.Header>

          <ReservationForm close={handleClose} />

        </Modal>
      </>
    );
  }

  ReservationButton.defaultProps = {
    text: "Reservations",
  };
  
export default ReservationButton;