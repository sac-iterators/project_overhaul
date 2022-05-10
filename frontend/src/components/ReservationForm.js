import Modal from 'react-bootstrap/Modal'
import {Button, Form, FormLabel, FormControl} from 'react-bootstrap';
import { useState, useEffect} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { db, reservation_db } from '../firebase/firebaseConfig';
import {doc, addDoc, getDocs, deleteDoc} from 'firebase/firestore';
import moment from 'moment';
import emailjs from '@emailjs/browser';
import './ReservationForm.css';
import isoDate from './ISOdate';



function ReservationForm(props){
    // * Define useState variables for storing in database
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [guests, setGuests] = useState(1);
    const [phoneNumber, setPhoneNumber] = useState(0);
    const [notes, setNotes] = useState("");
    const [date, setDate] = useState();
    const [reservationComplete, setReservationComplete] = useState(false);
    const [validated, setValidated] = useState(false);

    // * Define variables for data fetching/manipulation/validation
    const [reservations, setReservations] = useState([]);
    const [openReservations, setOpenReservations] = useState([]);
    const [fetchReservation, setFetchReservations] = useState(true);
    const today = new Date();
    const timeBlocks = [];      // Array to store the time slots
    const times = new Date(today);
    const maxReservationDate = new Date(today);
    const delReservationDate = new Date(today);
    
    times.setTime(times.setSeconds(0));     // Times seconds/milleseconds set to 0 because they are irrelevant to reservations
    times.setTime(times.setMinutes(0));
    maxReservationDate.setDate(maxReservationDate.getDate() + 7);
    delReservationDate.setDate(delReservationDate.getDate() - 7);

    // TODO: * 12 and 20 can be replaced so not hardcoded for API calls
    for (let time_init = 12; time_init <= 20; time_init++) {
        timeBlocks.push(new Date(times.setHours(time_init)));
    }

    // * Set to constant so that fetching reservations only happens when called
    const getReservations = async () => {
            const data = await getDocs(reservation_db);
            setReservations(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
    };
    if (fetchReservation) getReservations().then(setFetchReservations(false))

    useEffect(() => {
        // Const that when called will delete reservations over a week old
        const deleteRes = async () => {
            const data = await getDocs(reservation_db);
            data.docs.forEach(delDoc => {
                const fields = delDoc._document.data.value.mapValue.fields;
                const reservationDate = moment(fields.date.stringValue);
                const deleteDate = moment(delReservationDate);

                if(reservationDate.isBefore(deleteDate, 'day')) {
                    console.log(delDoc.id + ' | ' + reservationDate + ': Should be deleted');
                    const del = async () => {
                        await deleteDoc(doc(db, 'reservations', delDoc.id))
                    };
                    del();
                } else {
                    console.log(delDoc.id + ': Does not need to be removed');
                }
            });
        }
        deleteRes();
    });

    function onDateChange(newDate) {
        setOpenReservations([]);
        setDate(newDate);
    }

    function reservationCheck(reservationDate) {
        const bookedReservations = [];
        console.log("DEBUG | Clicked date: " + reservationDate.toDateString()); // Debug message

        reservations.forEach(item => { // Loops through all reservations 
            if (item.date === isoDate(reservationDate)) {
                console.log("DEBUG | Reservation found on this date")
                bookedReservations.push(item.time);
            } 
        });

        console.log("DEBUG | Booked Reservations: " + bookedReservations);

        // TODO: Possible redundency
        // * Uses the reservation array to remove from timeblocks and store it to openreservations
        timeBlocks.forEach(slot => {
            if (!bookedReservations.includes(slot.toLocaleTimeString())) {
                setOpenReservations(openReservations => [...openReservations, slot]);
            }
        });
    }

    // Passed a date and returns it in ISO format
    // function isoDate(oldDate) {
    //     const year = oldDate.getFullYear();
    //     let month = oldDate.getMonth()+1;
    //     let dt = oldDate.getDate();

    //     if (dt < 10) {
    //         dt = '0' + dt;
    //     }
    //     if (month < 10) {
    //         month = '0' + month;
    //     }
    //     return year+'-' + month + '-'+ dt;
    // }

    function dateForEmail(oldDate) {
        const year = new Date(oldDate).getFullYear();
        let month = new Date(oldDate).getMonth()+1;
        let dt = new Date(oldDate).getDate();

        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }

        return month + "/" + dt + "/" + year
    }

    const createReservation = async() => {
        try{
            await addDoc(reservation_db, {
                fname: fname, 
                lname: lname, 
                email: email, 
                phoneNum: phoneNumber, 
                notes: notes, 
                guests: guests,
                date: isoDate(date),
                time: date.toLocaleTimeString()
            })
        }catch(err){
            console.log(err);
        }
    };

    function timeClick(clicked_time) {
        const timeChoice = new Date(clicked_time.target.value);
        date.setHours(timeChoice.getHours());
    }

    function setTemplate() {
        return {
            name: fname + " " + lname,
            email: email,
            guests: guests,
            date: dateForEmail(date),
            time: date.toLocaleTimeString(),
            notes: notes
        }
    }
    

    function sendEmail() {
        emailjs.send('service_26z1tpt', 'template_b3e47ua', setTemplate(), 'gYwVV1r7UqHJLSBIW')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    const validate = (event) => {
        event.preventDefault();
        event.stopPropagation();
        
        const form = event.currentTarget;
        if (form.checkValidity()) {
            if(!date) {
                alert("Please select an available date")
            }else if(!date.getHours()){
                alert("Please select an available time")
            } else {
                setReservationComplete(true);
                createReservation();
                sendEmail();
                console.log(new Date(date).toLocaleTimeString())
            }
        }
        setValidated(true);
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
            <Form noValidate validated={validated} onSubmit={validate}>
                <Modal.Body>
                    {reservationComplete ? <p> Thank you, your reservation has been made. If you have not received your email confirmation, please check your spam folder. </p> : <>
                    <div className = "sub-header"> 
                        <large id = "reseravtion-disclaimer" className="form-text text-muted">*Please note reservations will only be for Parties of 8 . Parties of 10 or more please call our business number.*</large>
                    </div>

                    <div className = "reservation-group">
                        <FormLabel htmlFor="firstName"> First Name</FormLabel>
                        <FormControl type="text" className="form-control" id="firstname" name="firstName" placeholder="John" 
                            onChange={(event) => setFname(event.target.value)}
                            pattern="[A-Za-z]*" maxLength="20" required>   
                        </FormControl>
                        <Form.Control.Feedback type="invalid">Please enter your first name</Form.Control.Feedback>
                    </div>

                    <div className = "reservation-group">
                        <FormLabel htmlFor="lastName"> Last Name</FormLabel>
                        <FormControl type="text" className="form-control" id="lastname" name="lastName" placeholder="Doe" 
                            onChange={(event) => setLname(event.target.value)}
                            pattern="[A-Za-z]*" maxLength="20" required> 
                        </FormControl>
                        <Form.Control.Feedback type="invalid">Please enter your last name</Form.Control.Feedback>
                    </div>

                    <div className = "reservation-group">
                        <FormLabel htmlFor="email"> Email Address</FormLabel>
                        <FormControl type="email" className="form-control" id="email" name="email" placeholder="john.doe@email.com" 
                            onChange={(event) => setEmail(event.target.value)}
                            maxLength="50" required>
                        </FormControl>
                        <Form.Control.Feedback type="invalid">Please enter your email address</Form.Control.Feedback>
                    </div>

                    <div className = "reservation-group">
                        <FormLabel htmlFor="phoneNumber"> Phone Number</FormLabel>
                        <FormControl type="tel" className="form-control" id="phoneNumber" name="phoneNumber" placeholder="(123) 456-7890" 
                            onKeyDown={phoneNumberFormatter} onChange={(event) => setPhoneNumber(event.target.value)} 
                            pattern='([0-9]{3})" "[0-9]{3} \- [0-9]{4}' minLength="14" maxLength="14" required>
                        </FormControl>
                        <Form.Control.Feedback type="invalid">Please enter your phone number</Form.Control.Feedback>
                        <small id="numberAreacode" className="form-text text-muted">Please include your area code.</small>
                    </div>

                    <div className = "reservation-group">
                        <FormLabel htmlFor = "totalGuests"> Total Number of Guests</FormLabel>
                        <FormControl type="number" className="form-control" id="totalGuests" name="totalGuests"
                            onChange={(event) => setGuests(event.target.value)} min="8" max="12" required>
                        </FormControl>
                        <Form.Control.Feedback type="invalid">Please enter your party size</Form.Control.Feedback>
                        <small className="form-text text-muted">Only accepting reservations for parties of 8-12.</small>
                    </div>

                    <div className = "reservation-calendar">
                        <label htmlFor="calendar"> Select a date & time for your reservation.</label>
                        <Calendar 
                            onClickDay= {(e) => {
                                onDateChange(e)
                                reservationCheck(e)
                            }}
                            value= {date}
                            minDate= {today}
                            maxDate= {maxReservationDate}
                        />

                        <label htmlFor="time"> Choose an available time </label>
                        <div>
                            {openReservations.map((time) => {
                                return <Button className='time-reserv-button' value={time} onClick={(e) => timeClick(e)}>{time.toLocaleTimeString()}</Button>
                            })}
                        </div>
                    </div>

                    <div className = "reservation-group">
                        <label htmlFor="specialNotes">Other: </label>
                        <input type="text" className="form-control" id="specialNotes" maxLength="100"
                            placeholder='Let us know if there are any accommodations needed.' 
                            onChange={(event) => setNotes(event.target.value)}>
                        </input>
                    </div>
                    </>}
                    
                </Modal.Body>
                <Modal.Footer> 
                        <Button variant="secondary" onClick={props.close}>
                            {reservationComplete ? 'Close' : 'Cancel'}
                        </Button>
                        { reservationComplete ? <></> : 
                            <Button type="submit" variant="primary" onClick={() => {
                            }}>
                                Reserve
                            </Button> 
                        }
                </Modal.Footer>
            </Form>
        </div>  
    );
}

export default ReservationForm; 
