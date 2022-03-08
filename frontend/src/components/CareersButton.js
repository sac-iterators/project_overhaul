import Modal from 'react-bootstrap/Modal'
import {Form, ToggleButtonGroup, ToggleButton, Button} from 'react-bootstrap';
import { useState, ReactDOM} from 'react';
import AccordionMenu from './AccordionMenu';
import CareerInfo from './CareerInfo.js'
import { FormLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';

function CareersButton() {
    const [show, setShow] = useState(false);
    const [value, setValue] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange = (val) => setValue(val);

    return (
      <>
        <a href='#' onClick={handleShow}>
          Careers
        </a>
        <Form>
          <Modal show={show} onHide={handleClose} className="orderModal">
            <Modal.Header closeButton>
              <Modal.Title>Career Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <AccordionMenu data={CareerInfo}/>
              <hr></hr>
                  <div>
                      <FormLabel>What positions are your interested in?</FormLabel>
                      <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                        <ToggleButton id="tbg-btn-1" variant="outline-dark" size="sm" className='mx-1' value={1}>Pos1</ToggleButton>
                        <ToggleButton id="tbg-btn-2" variant="outline-dark" size="sm" className='mx-1' value={2}>Pos2</ToggleButton>
                        <ToggleButton id="tbg-btn-3" variant="outline-dark" size="sm" className='mx-1' value={3}>Pos3</ToggleButton>
                        <ToggleButton id="tbg-btn-4" variant="outline-dark" size="sm" className='mx-1' value={4}>Pos4</ToggleButton>
                        <ToggleButton id="tbg-btn-5" variant="outline-dark" size="sm" className='mx-1' value={5}>Pos5</ToggleButton>
                      </ToggleButtonGroup>
                      <FormControl type="hidden"></FormControl>
                  </div>
                  <div>
                      <FormLabel for="resume">Resume: </FormLabel>
                      <FormControl type="file" class="form-control" id="resumeAttachment"></FormControl>
                  </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Cancel</Button>
              <Button type="submit" variant="primary" accept=".docx, .doc, .pdf" onClick={handleClose}>Submit</Button>
            </Modal.Footer>
          </Modal>
        </Form>
        
      </>
    );
  }

// render(<ReservationButton />);
export default CareersButton; 