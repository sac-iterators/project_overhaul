import Modal from 'react-bootstrap/Modal'
import {Button} from 'react-bootstrap';
import { useState, ReactDOM} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function ReservationForm(){

    const [value, onChange] = useState(new Date());

    return(
        <form>

            <div class = "reservation-group">
                <label for = "firstName"> First Name</label>
                <input type = "firstName" class="form-control" id="firstname" placeholder="Enter your First Name."></input>
            </div>

            <div class = "reservation-group">
                <label for = "lastName"> Last Name</label>
                <input type = "lastName" class="form-control" id="lastname" placeholder="Enter your Last Name."></input>
            </div>

            <div class = "reservation-group">
                <label for = "email"> Email Address</label>
                <input type = "email" class="form-control" id="email" placeholder="Enter your preffered email address."></input>
            </div>

            <div class = "reservation-group">
                <label for = "phoneNumber"> Phone Number</label>
                <input type = "phoneNumber" class="form-control" id="phoneNumber" placeholder="Enter your preffered phone number."></input>
                <small id = "numberAreacode" class="form-text text-muted">Please incldude your area code.</small>
            </div>

            <div class = "reservation-group">
                <label for = "Total Number of Guests"> Total Number of Guests</label>
                <select class="form-control" id="totalGuests" placeholder="Total Number of Guests">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
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

        </form>
    );

}

export default ReservationForm;