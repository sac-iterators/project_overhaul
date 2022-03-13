import Modal from 'react-bootstrap/Modal'
import {Button} from 'react-bootstrap';
import { useState, ReactDOM, useEffect} from 'react';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import { reservation_db } from '../firebase/firebaseConfig';
import {collection, addDoc, getDocs} from 'firebase/firestore';
import { async } from '@firebase/util';


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


    const [date, setDate] = useState(new Date());

    //const [startDate, setStartDate] = useState(new Date());

    //
    const [reservations, setReservations] = useState([]);

    // * This is the available times for each day that is selected
    const [openReservations, setOpenReservations] = useState([]);
    const [bookedReservations, setBookedReservations] = useState([]);
    const [emptyReservations, setEmptyReservations] = useState([]);

    //

    const today = new Date();

    // ! Marked for deletion
    // const minDate = new Date(today)
    // minDate.setDate(minDate.getDate() - 1)
    // console.log("Min date: " + minDate)

    // ? This sets how far out a user is able to click on the dates
    const maxDate = new Date(today);
    maxDate.setDate(maxDate.getDate() + 7)

    //
    const [fullAvailability, setFullAvailability] = useState([]);


    const times = new Date(today);
    times.setTime(times.setSeconds(0));
    times.setTime(times.setMinutes(0));
    times.setTime(times.setHours(8));


    const elevenBlock = new Date(times.setHours(11));
    const oneBlock = new Date(times.setTime(times.setHours(13)));
    const threeBlock = new Date(times.setTime(times.setHours(15)));
    const fiveBlock = new Date(times.setTime(times.setHours(17)));
    const sevenBlock = new Date(times.setTime(times.setHours(19)));
    const eightBlock = new Date(times.setTime(times.setHours(20)));
    const twelve = new Date(times.setTime(times.setHours(0)));


    const timeBlocks = [
        elevenBlock,
        oneBlock,
        threeBlock,
        fiveBlock,
        sevenBlock,
        eightBlock,
        twelve
    ];
    

    function initTime() {

        timeBlocks.forEach(time => {
            setFullAvailability(fullAvailability => [...fullAvailability, time]);
        });

    }

    if (fullAvailability.length === 0) initTime();

    //Function that runs when date is changed
    function onDateChange(newDate) {
        setOpenReservations(emptyReservations);

        setDate(newDate);
        
        //Call funtion to check date 
        //If date has availibility pop-up hours option
        //  If not tell user that day is fully booked

        checkDate(newDate);
        console.log(openReservations);
        console.log(fullAvailability);
        console.log(bookedReservations);
    }

    
    function checkDate(date) {
        //Check for dates
        // TODO: Handle holidays/edge cases

        // ? Consider moving this code to onDateChange to decrease loading amount
        const getReservations = async () => {
            const data = await getDocs(reservation_db);
            setReservations(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
        };
        getReservations();


        setBookedReservations(emptyReservations);

        // * Loops through all reservations
        reservations.forEach(item => {

            //setOpenReservations(fullAvailability);
            
            // If there is a reservation already on the same date
            if (item.date === date.toDateString()) {
                console.log(date.toDateString());
                
                // TODO: Create pop up with list of remaining availibilities
                // * GIVE: pop up props list of closed availibilities
                // * GET: time choice

                
                setBookedReservations(bookedReservations => [...bookedReservations, item.time]);
                
                // TODO: Store time choice to the date variable

                return;
            } 
            else { // No reservations exist on the same day
                // TODO: Create pop up with full availibility
                // * GET: time chioce

                


            }
        });

        // TODO : Use the bookedReservations to remove from open
        fullAvailability.forEach(slot => {
            if (!bookedReservations.includes(slot)) {
                setOpenReservations(openReservations => [...openReservations, slot]);
            }
        });
    }


    //Function that runs to check times on clicked day
    //If



    //Creates Reservation Document to database
    const createReserv = async() => {
        await addDoc(reservation_db, {
            fname: fname, 
            lname: lname, 
            email: email, 
            phoneNum: phoneNumber, 
            notes: notes, 
            guests: guests,
            timestamp: {
                date: date.toDateString(),
                time: date.toLocaleTimeString()
            }
        })
    };

    // * If time is clicked
    function timeClick(clicked_time) {
        // TODO: Store time choice & reset booked reservations
        setBookedReservations(emptyReservations);
        const val = new Date(clicked_time.target.value);

        console.log(val.toLocaleTimeString());
        console.log(date.toLocaleTimeString());

        // New date 
        date.setTime(val.getTime());
        console.log(date);
    }

    

    return(
        <div
            onKeyDown={e => e.stopPropagation()}
            onClick={e => e.stopPropagation()}
            onFocus={e => e.stopPropagation()}
            onMouseOver={e => e.stopPropagation()}
        >
        <Modal.Body show = {show} onHide={handleClose}>

            <div class = "reservation-group">
                <label for = "firstName"> First Name</label>
                <input type = "firstName" class="form-control" id="firstname" placeholder="Enter your First Name." 
                    onChange={(event) => setFname(event.target.value)}>   
                </input>
            </div>

            <div class = "reservation-group">
                <label for = "lastName"> Last Name</label>
                <input type = "lastName" class="form-control" id="lastname" placeholder="Enter your Last Name." 
                    onChange={(event) => setLname(event.target.value)}></input>
            </div>

            <div class = "reservation-group">
                <label for = "email"> Email Address</label>
                <input patterm = "email" type = "email" class="form-control" id="email" placeholder="Enter your preffered email address." 
                    onChange={(event) => setEmail(event.target.value)}></input>
            </div>

            <div class = "reservation-group">
                <label for = "phoneNumber"> Phone Number</label>
                <input type = "phoneNumber" class="form-control" id="phoneNumber" placeholder="Enter your preffered phone number." 
                    onChange={(event) => setPhoneNumber(event.target.value)}></input>
                <small id = "numberAreacode" class="form-text text-muted">Please incldude your area code.</small>

            </div>

            <div class = "reservation-group">
                <label for = "Total Number of Guests"> Total Number of Guests</label>
                <select class="form-control" id="totalGuests" placeholder="Total Number of Guests" onChange={(event) => setGuests(event.target.value)}>
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
                
                {/*/ isFull ? x : y*/}

                {openReservations.map((time) => {
                    return <div>
                        <Button value={time} onClick={(e) => timeClick(e)}>{time.toLocaleTimeString()}</Button>
                    </div>
                })}

                {/* <div className='res_teset'>
                    {reservations.map((item) => 
                        { return <div key={item.id}> 
                        <p>email: {item.email}</p>
                        <p>fname: {item.fname}</p>
                        <p>guests: {item.guests}</p>
                        <p>lname: {item.lname}</p>
                        <p>notes: {item.notes}</p>
                        <p>phoneNum: {item.phoneNum}</p>
                        <p>date: {item.date}</p>
                        <p>time: {item.time}</p>
                        </div>
                    })}
                </div> */}


            </div>

            <div class = "reservation-group">
                <label for = "specialNotes">Other: </label>
                <input type = "text" class="form-control" id="specialNotes" 
                placeholder='Let us know if there are any accomedations needed.' onChange={(event) => setNotes(event.target.value)}></input>
            </div>

            </Modal.Body>
            <Modal.Footer> 
                    <Button variant="secondary" onClick={props.close}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={createReserv}>
                        Reserve
                    </Button>
            </Modal.Footer>
        </div>
            
    );
}

export default ReservationForm; 
