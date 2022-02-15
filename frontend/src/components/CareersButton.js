import Modal from 'react-bootstrap/Modal'
import {Button} from 'react-bootstrap';
import { useState, ReactDOM} from 'react';
import AccordionMenu from './AccordionMenu';
import CareersForm from './CareersForm';

function CareersButton() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <a href='#' class="text-muted" onClick={handleShow}>
          Careers
        </a>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Career Sign Up</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <AccordionMenu/>
            <CareersForm />
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

// render(<ReservationButton />);
export default CareersButton; 