import Modal from 'react-bootstrap/Modal'
import {Button, Form} from 'react-bootstrap';
import { useState, ReactDOM} from 'react';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import { reservation_db } from '../firebase/firebaseConfig';
import {collection, addDoc, getDocs} from 'firebase/firestore';

// ? Questions to decided upon
// ? -------------------------
// ? Research into if I need useEffect
// ? Get date variable to not reset after clicking on a field that is not a date
// ? 

// TODO: 

function ReservationForm(props){
    // TODO: Check the show states and make comments
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    // * Define set variables for database
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [guests, setGuests] = useState(1);
    const [phoneNumber, setPhoneNumber] = useState(0);
    const [notes, setNotes] = useState("");

    // * Sets the date variable that is going to be sent to the database
    const [date, setDate] = useState(new Date());

    // * UseState variable that is for storing all of the reservations
    const [reservations, setReservations] = useState([]);

    // * This is the times for each day that is selected
    const [openReservations, setOpenReservations] = useState([]);
    const [bookedReservations, setBookedReservations] = useState([]);

    // Variable for setting reservations to empty
    const [emptyReservations, setEmptyReservations] = useState([]);

    const today = new Date(); // Todays date

    const maxDate = new Date(today); // Variable for storing the max date that a user is able to reserve
    maxDate.setDate(maxDate.getDate() + 7); //  * This sets how far out a user is able to click on the dates

    // Variable for a day with no reservations
    const [fullAvailability, setFullAvailability] = useState([]);

    // * Variable for storing the time slots of a day at the restaurant
    const times = new Date(today);
    times.setTime(times.setSeconds(0)); // Sets time slot seconds to 0
    times.setTime(times.setMinutes(0)); // Sets time slot minutes to 0

    // ! Make sure that this time is not essential and then delete
    // ! times.setTime(times.setHours(8));

    // * Time blocks that are used to store the time of the daily time slots
    const elevenBlock = new Date(times.setHours(11));
    const oneBlock = new Date(times.setTime(times.setHours(13)));
    const threeBlock = new Date(times.setTime(times.setHours(15)));
    const fiveBlock = new Date(times.setTime(times.setHours(17)));
    const sevenBlock = new Date(times.setTime(times.setHours(19)));
    const eightBlock = new Date(times.setTime(times.setHours(20)));

    // * Array to store the time slots
    const timeBlocks = [
        elevenBlock,
        oneBlock,
        threeBlock,
        fiveBlock,
        sevenBlock,
        eightBlock,
    ];
    
    // * Function to initiate the availability of a day with no reservations 
    function initTime() {
        timeBlocks.forEach(time => { // Iterates through each time block
            setFullAvailability(fullAvailability => [...fullAvailability, time]); // * Sets full availability to time slots
        });
    }

    // * If fullAvailability does not exist, then create it
    if (fullAvailability.length === 0) initTime();

    // * Function that runs when date is changed
    function onDateChange(newDate) {
        setOpenReservations(emptyReservations); // Set open resrvations to empty
        setDate(newDate); // Set date (that is returned to database) to the date clicked/changed-to

        checkDate(newDate); // Pass date clicked/changed-to to the checkDate() function
        // ! DEBUG: console.log(openReservations);
        // ! DEBUG: console.log(fullAvailability);
        // ! DEBUG: console.log(bookedReservations);
    }

    // * Functon that runs to check date
    function checkDate(date) {
        // TODO: Handle holidays/edge 
        
        // ? Consider moving this code to onDateChange to decrease loading amount
        const getReservations = async () => {
            const data = await getDocs(reservation_db);
            setReservations(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
        };
        getReservations();


        setBookedReservations(emptyReservations);

        reservations.forEach(item => { // Loops through all reservations 

            console.log('ITEM: ' + item.date);
            console.log("date " + date.toDateString());
            // ? If there is a reservation already on the same date
            if (item.date === date.toDateString()) {
                console.log("DEBUG | Clicked date: " + date.toDateString()); // Debug message

                // Set booked reservations to each reservation item that exists that equals a reservation date
                setBookedReservations(bookedReservations => [...bookedReservations, item.time]);

                // ? Do I need this todo?
                // TODO: Store time choice to the date variable
            } 
            else { // * No reservations exist on the same day
                // TODO: Decide if I want to deal with this case
            }
        });

        // * Uses the bookedReservations to remove from fullAvailability and store it to bookedReservations
        fullAvailability.forEach(slot => {
            console.log(slot.toLocaleTimeString());
            console.log(bookedReservations);
            if (!bookedReservations.includes(slot.toLocaleTimeString())) {
                setOpenReservations(openReservations => [...openReservations, slot]);
            }
        });
    }

    // * Creates Reservation Document that is sent to database
    const createReserv = async() => {
        await addDoc(reservation_db, {
            fname: fname, 
            lname: lname, 
            email: email, 
            phoneNum: phoneNumber, 
            notes: notes, 
            guests: guests,
            date: date.toDateString(),
            time: date.toLocaleTimeString()
        })
    };

    // * If time slot for date is clicked
    function timeClick(clicked_time) {
        setBookedReservations(emptyReservations); // Resets bookedReservations
        const val = new Date(clicked_time.target.value); // Val = clicked time value

        console.log(val.toLocaleTimeString()); // Debug
        console.log(date.toLocaleTimeString()); // Debug
        console.log(date);

 
        date.setHours(val.getHours()); // Date's time is set to val
        console.log(date);
    }

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
                      
                  <div class = "sub-header"> 
                     <large id = "reseravtion-disclaimer" class="form-text text-muted">*Please note Reservations will only be for Parties of 8 or more*</large>
                  </div>

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

            <div class = "reservation-group">
                <label for = "Total Number of Guests"> Total Number of Guests</label>
                {/* <select class="form-control" id="totalGuests" placeholder="Total Number of Guests" onChange={(event) => setGuests(event.target.value)}>

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
                </select> */}
                <input type = "numberOfGuests" class="form-control" id="totalGuests"  
                    onChange={(event) => setGuests(event.target.value)}></input>
            </div>

            <div class = "reservation-calendar">
                <label for="calendar"> Select a date & time for your reservation.</label>
                <Calendar 
                    onClickDay= {(e) => {
                        onDateChange(e)
                        }}
                    value= {date}
                    minDate= {today}
                    maxDate= {maxDate}
                />

                <label for="time"> Choose an available time </label>
                
                {/* To check for full availability
                / isFull ? x : y*/}
                {openReservations.map((time) => {
                    return <div>
                        <Button value={time} onClick={(e) => timeClick(e)}>{time.toLocaleTimeString()}</Button>
                    </div>
                })}

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
