import Modal from 'react-bootstrap/Modal'
import {Form, ToggleButtonGroup, ToggleButton, Button} from 'react-bootstrap';
import { useState, useEffect, ReactDOM} from 'react';
import AccordionMenu from './AccordionMenu';
import { FormLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { applications_db, storage } from '../firebase/firebaseConfig';
import {collection, doc, setDoc, addDoc, getDocs} from 'firebase/firestore';
import { uploadBytes, ref, getDownloadURL } from '@firebase/storage';
import { async } from '@firebase/util';
import { job_listings, job_listings_test } from '../firebase/firebaseConfig';
import application from '../resources/EmploymentApplication.docx'

function CareersButton() {
    const [show, setShow] = useState(false);
    const [value, setValue] = useState();
    const [pos, setPos] = useState([]);
    const [info, setInfo] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange = (val) => setValue(val);

    useEffect(() => {
      const getPos = async () => {
          const data = await getDocs(job_listings);
          setPos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
        };
      getPos();
      
      const getInfo = async () => {
        const data = await getDocs(job_listings_test);
        setInfo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
      };
      getInfo();
    }, []);

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
      if(result){
        addDoc(applications_db, {
          firstname: fname,
          lastname: lname,
          positions: positions,
        });
      }
    }

    function validate(){
      /*document.getElementById('firstname').oninvalid.setCustomValidity('Please enter your first name');
      document.getElementById('lastname').oninvalid.setCustomValidity('Please enter your last name');
      */
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
              <AccordionMenu data={info}/>
              <hr></hr>
                  <div>
                      <FormLabel>What positions are your interested in?</FormLabel>
                        <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                          {pos.map((item) => {
                            return (
                              <ToggleButton id={`tbg-btn-${item.id}`} key={item.id} variant="outline-dark" size="sm" 
                              className='mx-1' value={item.id}>
                                {item.title}
                              </ToggleButton>
                            );
                          })}
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

                      <FormLabel htmlFor="resume">
                        Please fill out the <a href={application} download="EmploymentApplication.doc" className='hypertext'>Employment Application</a> and attach below.
                      </FormLabel>
                      <FormControl type="file" className="form-control" id="resumeAttachment" name="resume" accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" multiple required></FormControl>
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