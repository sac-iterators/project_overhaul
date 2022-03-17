import Modal from 'react-bootstrap/Modal'
import {Button} from 'react-bootstrap';
import { useState, ReactDOM} from 'react';
import { Link } from 'react-router-dom';
import grubhub from '../img/grubhub.svg';
import ubereats from '../img/ubereats.svg';
import postmates from '../img/postmates.svg';
import yelp from '../img/yelp.svg';

function OrderForm(){
    return(
        <form>
            <ul className="list-unstyled mb-0 service-select">
                <li className="mb-4"><a href="https://www.grubhub.com/restaurant/new-asian-n-cajun-2-greenback-ln-8121-greenback-ln-fair-oaks/3048809" target="_blank"><img src="https://cdn.cdnlogo.com/logos/g/61/grubhub.svg" className=" w-75"/></a></li>
                <li className="mb-0"><a href="https://www.ubereats.com/store/asian-n-cajun-2/m7JzYDLnRESi966_6EHoSg?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkFzaWFuJTIwTiclMjBDYWp1biUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmM4YzlhY2FkLTRjZjEtMTg1ZS1iMDE5LWVmMmFlZmFiYWIxNSUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBMzguNjQ5MDYlMkMlMjJsb25naXR1ZGUlMjIlM0EtMTIxLjUxMDA5NjclN0Q%3D" target="_blank"><img src="https://cdn.cdnlogo.com/logos/u/49/uber-eats.svg" className=" w-75"/></a></li>
                <li className="mb-0"><a href="https://postmates.com/store/asian-n-cajun-2/m7JzYDLnRESi966_6EHoSg" target="_blank"><img src="https://www.vectorlogo.zone/logos/postmates/postmates-ar21.svg" className=" w-75"/></a></li>

            </ul>
            <hr></hr>
            <div>
                <p className="text-center">You can also check out our menu <Link to="/menu" className="hypertext">here</Link> and place a pickup order through the phone!</p>
            </div>
        </form>
    );

}
export default OrderForm;