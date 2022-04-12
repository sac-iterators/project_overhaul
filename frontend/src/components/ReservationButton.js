import Modal from 'react-bootstrap/Modal'
import { useState, ReactDOM} from 'react';
import ReservationForm from './ReservationForm';
import React from 'react';
import {Button} from 'react-bootstrap';


function ReservationButton(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
      <>
        {/* <a href='#' onClick={handleShow}>
          Reserve
        </a>  */}
        <div  onClick={handleShow}>Reserve</div>
  
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
  
// render(<ReservationButton />);
export default ReservationButton;