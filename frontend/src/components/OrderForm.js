import Modal from 'react-bootstrap/Modal'
import {Button} from 'react-bootstrap';
import { useState, ReactDOM} from 'react';
import { Link } from 'react-router-dom';

function OrderForm(){
    return(
        <form>
            <ul class="list-unstyled mb-0 service-select">
                <li class="mb-4"><a href="https://www.grubhub.com/restaurant/new-asian-n-cajun-2-greenback-ln-8121-greenback-ln-fair-oaks/3048809" target="_blank"><img src="https://cdn.cdnlogo.com/logos/g/61/grubhub.svg" className=" w-75"/></a></li>
                <li class="mb-0"><a href="#" target="_blank"><img src="https://cdn.cdnlogo.com/logos/u/49/uber-eats.svg" className=" w-75"/></a></li>
                <li class="mb-0"><a href="#" target="_blank"><img src="https://www.vectorlogo.zone/logos/postmates/postmates-ar21.svg" className=" w-75"/></a></li>
            </ul>
            <hr></hr>
            <div>
                <p>You can also check out our menu <Link to="/menu" class="obviousLink">here</Link> and place a pickup order through the phone!</p>
            </div>
        </form>
    );

}
export default OrderForm;