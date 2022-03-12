import Modal from 'react-bootstrap/Modal'
import {Button, Form} from 'react-bootstrap';
import { useState, ReactDOM} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { reservation_db } from '../firebase/firebaseConfig';
import {collection, addDoc, getDocs} from 'firebase/firestore';


function ReservationForm(props){

    const [value, onChange] = useState(new Date());

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    //Define set variables for database
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [guests, setGuests] = useState(1);
    const [phoneNumber, setPhoneNumber] = useState(0);
    const [notes, setNotes] = useState("");
    const [date, setDate] = useState()



    //Creates Reservation Document to database
    const createReserv = async() =>{
        await addDoc(reservation_db, {fname: fname, lname: lname, email: email, phoneNum: phoneNumber, notes: notes, guests: guests})
    };

    function validate(){
        document.getElementById('firstname').oninvalid.setCustomValidity('Please enter your first name');
        document.getElementById('lastname').oninvalid.setCustomValidity('Please enter your last name');
        document.getElementById('phoneNumber').oninvalid.setCustomValidity('test');
    }
    
    const phoneNumberFormatter = (e) => {
        const inputField = document.getElementById('phoneNumber');
        let formattedInputValue;
        if (!inputField.value)
            formattedInputValue = inputField.value;
        const phoneNumber = inputField.value.replace(/[^\d]/g, '');
        const phoneNumberLength = phoneNumber.length;
        if (phoneNumberLength < 4) 
            formattedInputValue = phoneNumber;
        else if (phoneNumberLength < 7) 
            formattedInputValue = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        else
            formattedInputValue = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 9)}`;
        
        inputField.value = formattedInputValue;
    }

    return(
        <div
            onKeyDown={e => e.stopPropagation()}
            onClick={e => e.stopPropagation()}
            onFocus={e => e.stopPropagation()}
            onMouseOver={e => e.stopPropagation()}
        >
            <Form>
                <Modal.Body>

                    <div className = "reservation-group">
                        <label htmlFor="firstName"> First Name</label>
                        <input type="text" className="form-control" id="firstname" name="firstName" placeholder="John" 
                            onChange={(event) => setFname(event.target.value)}
                            pattern="[A-Za-z]*" maxLength="20" required>   
                </input>
            </div>

                    <div className = "reservation-group">
                        <label htmlFor="lastName"> Last Name</label>
                        <input type="text" className="form-control" id="lastname" name="lastName" placeholder="Doe" 
                            onChange={(event) => setLname(event.target.value)}
                            pattern="[A-Za-z]*" maxLength="20" required> 
                        </input>
            </div>

                    <div className = "reservation-group">
                        <label htmlFor="email"> Email Address</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="john.doe@email.com" 
                            onChange={(event) => setEmail(event.target.value)}
                            maxLength="50">
                        </input>
            </div>

                    <div className = "reservation-group">
                        <label htmlFor="phoneNumber"> Phone Number</label>
                        <input type="tel" className="form-control" id="phoneNumber" name="phoneNumber" placeholder="(123) 456-7890" 
                            onKeyDown={phoneNumberFormatter} onChange={(event) => setPhoneNumber(event.target.value)} 
                            pattern='([0-9]{3})" "[0-9]{3} \- [0-9]{4}' minLength="14" maxLength="14" required>
                        </input>
                        <small id="numberAreacode" className="form-text text-muted">Please include your area code.</small>
            </div>

                    <div className = "reservation-group">
                        <label htmlFor = "Total Number of Guests"> Total Number of Guests</label>
                        <select className="form-control" id="totalGuests" placeholder="Total Number of Guests" onChange={(event) => setGuests(event.target.value)}>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                    <option value = "4"> 4</option>
                    <option value = "5"> 5</option>
                    <option value = "6"> 6</option>
                    <option value = "7"> 7</option>
                    <option value = "8"> 8</option>
                    <option value = "9"> 9</option>
                    <option value = "10"> 10</option>
                </select>
            </div>

                    <div className = "reservation-calendar">
                        <label htmlFor="calendar"> Select a date & time for your reservation.</label>
                <Calendar onChange = {(onChange) => setDate(onChange.target.value)} value = {value}/>
            </div>

                    <div className = "reservation-group">
                        <label htmlFor="specialNotes">Other: </label>
                        <input type="text" className="form-control" id="specialNotes" maxLength="100"
                placeholder='Let us know if there are any accomedations needed.' onChange={(event) => setNotes(event.target.value)}></input>
            </div>

            </Modal.Body>
            <Modal.Footer> 
                    <Button variant="secondary" onClick={props.close}>
                        Cancel
                    </Button>
                        <Button type="submit" variant="primary" onClick={() => {createReserv(); validate()}}>
                        Reserve
                    </Button>
            </Modal.Footer>
            </Form>
        </div>
            
    );
}

export default ReservationForm; 
