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
            <ul class="list-unstyled mb-0 services">
                <li class="mb-4 text-center"><a href="https://www.grubhub.com/restaurant/new-asian-n-cajun-2-greenback-ln-8121-greenback-ln-fair-oaks/3048809" target="_blank"><img src={grubhub} className="icons w-75"/></a></li>
                <li class="mb-4 text-center"><a href="#" target="_blank"><img src={ubereats} className="icons w-75"/></a></li>
                <li class="mb-2 text-center"><a href="#" target="_blank"><img src={postmates} className="icons w-75"/></a></li>
                <li class="mb-2 text-center"><a href="https://www.yelp.com/biz/asian-n-cajun-2-fair-oaks-2" target="_blank"><img src={yelp} className="icons w-50"/></a></li>
            </ul>
            <hr></hr>
            <div>
                <p class="text-center">You can also check out our menu <Link to="/menu" class="hypertext">here</Link> and place a pickup order through the phone!</p>
            </div>
        </form>
    );

}
export default OrderForm;