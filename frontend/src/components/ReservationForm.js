import Modal from 'react-bootstrap/Modal'
import {Button} from 'react-bootstrap';
import { useState, ReactDOM} from 'react';

function ReservationForm(){

    return(
        <form>

            <div class = "reservation-group">
                <label for = "firstName"> First Name</label>
                <input type = "firstName" class="form-control" id="firstname" placeholder="Please enter your first name."></input>
            </div>

            <div class = "reservation-group">
                <label for = "lastName"> Last Name</label>
                <input type = "lastName" class="form-control" id="lastname" placeholder="Please enter your last name."></input>
            </div>

            <div class = "reservation-group">
                <label for = "email"> Email Address</label>
                <input type = "email" class="form-control" id="email" placeholder="Please enter your preffered email address."></input>
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

        </form>
    );

}

export default ReservationForm;