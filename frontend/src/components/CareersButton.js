import Modal from 'react-bootstrap/Modal'
import {Form, FormLabel, FormControl, 
        ToggleButtonGroup, ToggleButton, Button} from 'react-bootstrap';
import { useState, useEffect, ReactDOM} from 'react';
import AccordionMenu from './AccordionMenu';
import { applications_db, storage, jobListings_db, careerInfo_db} from '../firebase/firebaseConfig';
import {collection, doc, setDoc, addDoc, getDocs, query, where, orderBy} from 'firebase/firestore';
import { uploadBytes, ref, getDownloadURL } from '@firebase/storage';
import { async } from '@firebase/util';
import application from '../resources/EmploymentApplication.docx'

function CareersButton() {
    const [show, setShow] = useState(false);
    const [value, setValue] = useState();
    const [pos, setPos] = useState([]);
    const [info, setInfo] = useState([]);
    const [validated, setValidated] = useState(false);
    const [applicationSent, setApplicationSent] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => {
      setValue(null);
      setShow(false);
      setValidated(false);
      setApplicationSent(false);
    }
    
    const handleChange = (val) => {setValue(val)};

    useEffect(() => {
      (async () => {
          let data;

          data = await getDocs(query(jobListings_db));
          setPos(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
          
          data = await getDocs(query(careerInfo_db, orderBy("id")));
          setInfo(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })();
    }, []);

    const handleSubmit = async(e) =>{
      e.preventDefault();
      e.stopPropagation();
      
      const form = e.currentTarget;
      if (form.checkValidity()) {
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
          setApplicationSent(true);
        }
      }
      setValidated(true);
    }

    return (
      <>
        <a href='#' onClick={handleShow}>
          Careers
        </a>
  
        <Modal show={show} onHide={handleClose} className="orderModal">
          <Modal.Header closeButton>
            <Modal.Title>Apply</Modal.Title>
          </Modal.Header>
          { applicationSent ? <></> : 
            <Modal.Body>
              <AccordionMenu data={info}/>
            </Modal.Body>
          }
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Modal.Body>
              { applicationSent ? <p> Thank you, your application has been submitted! </p> : <>
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
                    <Form.Control.Feedback type="invalid">Please enter your first name</Form.Control.Feedback>

                    <FormLabel htmlFor="lastName">Last Name: </FormLabel>
                    <FormControl type="text" className="form-control" id="lastname" name="lastName" placeholder='Doe'
                    pattern="[A-Za-z]*" maxLength="20" required></FormControl>
                    <Form.Control.Feedback type="invalid">Please enter your last name</Form.Control.Feedback>

                    <FormLabel htmlFor="resume">
                      Please fill out the <a href={application} download="EmploymentApplication.doc" className='hypertext'>Employment Application</a> and attach below.
                    </FormLabel>
                    <FormControl type="file" className="form-control" id="resumeAttachment" name="resume" accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" multiple required></FormControl>
                    <Form.Control.Feedback type="invalid">Please upload an application</Form.Control.Feedback>
                </div>
              </>}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Cancel</Button>
              { applicationSent ? <></> : 
                <Button type="submit" variant="primary">Submit</Button>
              }
            </Modal.Footer>
          </Form>
        </Modal>
      </>
    );
  }

// render(<ReservationButton />);
export default CareersButton; 