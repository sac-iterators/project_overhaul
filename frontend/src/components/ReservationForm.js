import Modal from 'react-bootstrap/Modal'
import {Button} from 'react-bootstrap';
import { useState, ReactDOM} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {db} from './firebase-config';
import {collection, addDoc, getDocs} from 'firebase/firestore';


function ReservationForm(){

    const [value, onChange] = useState(new Date());

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    //Define set variables for database
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [guests, setGuests] = useState(0);
    const [phoneNumber, setPhoneNumber] = useState(0);

    const reservCollectionRef = collection(db, "reservations_Test");


    //Creates Reservation Document to database
    const createReserv = async() =>{
        await addDoc(reservCollectionRef, {fname: fname, lname: lname, email: email, phoneNum: phoneNumber})
    };

    

    return(
        <form>

            <div class = "reservation-group">
                <label for = "firstName"> First Name</label>
                <input type = "firstName" class="form-control" id="firstname" placeholder="Enter your First Name." onChange={(event) => setFname(event.target.value)}>   
                </input>
            </div>

            <div class = "reservation-group">
                <label for = "lastName"> Last Name</label>
                <input type = "lastName" class="form-control" id="lastname" placeholder="Enter your Last Name." onChange={(event) => setLname(event.target.value)}></input>
            </div>

            <div class = "reservation-group">
                <label for = "email"> Email Address</label>
                <input type = "email" class="form-control" id="email" placeholder="Enter your preffered email address." onChange={(event) => setEmail(event.target.value)}></input>
            </div>

            <div class = "reservation-group">
                <label for = "phoneNumber"> Phone Number</label>
                <input type = "phoneNumber" class="form-control" id="phoneNumber" placeholder="Enter your preffered phone number." onChange={(event) => setPhoneNumber(event.target.value)}></input>
                <small id = "numberAreacode" class="form-text text-muted">Please incldude your area code.</small>
            </div>

            <div class = "reservation-group">
                <label for = "Total Number of Guests"> Total Number of Guests</label>
                <select class="form-control" id="totalGuests" placeholder="Total Number of Guests">
                    <option onChange={(event) => setGuests(event.target.value)}>1</option>
                    <option onChange={(event) => setGuests(event.target.value)}>2</option>
                    <option onChange={(event) => setGuests(event.target.value)}>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
            </div>

            <div class = "reservation-calendar">
                <label for="calendar"> Select a date & time for your reservation.</label>
                <Calendar onChange={onChange} value={value} />
            </div>

            <div class = "reservation-group">
                <label for = "specialNotes">Other: </label>
                <input type = "notes" class="form-control" id="specialNotes" placeholder='Let us know if there are any accomedations needed.'></input>
            </div>
            {/* <Modal.Footer show = {show} onHide={handleClose}>
          
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={createReserv}>
                        Reserve
                    </Button>
            </Modal.Footer> */}
            <Button variant="secondary" onClick={handleClose}>
                Cancel
            </Button>
             <Button variant="primary" onClick={createReserv}>
                Reserve
            </Button>
        </form>
        
        
    );

}

export default ReservationForm; 
