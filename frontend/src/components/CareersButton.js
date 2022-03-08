import Modal from 'react-bootstrap/Modal'
import {Form, ToggleButtonGroup, ToggleButton, Button} from 'react-bootstrap';
import { useState, ReactDOM} from 'react';
import AccordionMenu from './AccordionMenu';
import CareerInfo from './CareerInfo.js'
import { FormLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { applications_db, storage } from '../firebase/firebaseConfig';
import {collection, doc, setDoc, addDoc, getDocs} from 'firebase/firestore';
import { uploadBytes, ref, getDownloadURL } from '@firebase/storage';
import { async } from '@firebase/util';

function CareersButton() {
    const [show, setShow] = useState(false);
    const [value, setValue] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange = (val) => setValue(val);

    const submit = async(e) =>{
      e.preventDefault();
      var positions = [];
      for (var checkbox of document.querySelectorAll('input[type="checkbox"]:checked')) 
        positions.push(checkbox.nextSibling.textContent);
      
      const fname = document.getElementById('firstname').value;
      const lname = document.getElementById('lastname').value;
        
      const filename = 'gs://asian-n-cajun-db.appspot.com/resumes_test/' + lname + "_" + fname;
      const storageRef = ref(storage, filename);
      let result = await new Promise((resolve, reject) => {
        try{
          uploadBytes(storageRef, document.getElementById('resumeAttachment').files[0]);
          resolve(true);
        }catch(err){
          console.log(err);
          reject(false);
        }
      });
      console.log(result);
      if(result){
        addDoc(applications_db, {
          firstname: fname,
          lastname: lname,
          positions: positions,
        });
      }
    }

    function validate(){
      document.getElementById('firstname').oninvalid.setCustomValidity('Please enter your first name');
      document.getElementById('lastname').oninvalid.setCustomValidity('Please enter your last name');
    }

    return (
      <>
        <a href='#' onClick={handleShow}>
          Careers
        </a>
        
        <Modal show={show} onHide={handleClose} className="orderModal">
          <Modal.Header closeButton>
            <Modal.Title>Career Sign Up</Modal.Title>
          </Modal.Header>
          <Form onSubmit={(event) => {submit(event); handleClose();}}>
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
                  <FormLabel htmlFor="firstName">First Name: </FormLabel>
                      <FormControl type="text" className="form-control" id="firstname" name="firstName" placeholder='John'
                      pattern="[A-Za-z]*" maxLength="20" required></FormControl>

                      <FormLabel htmlFor="lastName">Last Name: </FormLabel>
                      <FormControl type="text" className="form-control" id="lastname" name="lastName" placeholder='Doe'
                      pattern="[A-Za-z]*" maxLength="20" required></FormControl>

                      <FormLabel htmlFor="resume">Resume: </FormLabel>
                      <FormControl type="file" className="form-control" id="resumeAttachment" accept=".docx, .doc, .pdf" required></FormControl>
                  </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Cancel</Button>
              <Button type="submit" variant="primary" onClick={validate}>Submit</Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </>
    );
  }

// render(<ReservationButton />);
export default CareersButton; 