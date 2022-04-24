import React from 'react'
import Navigation from './Navigation';
import Modal from 'react-bootstrap/Modal'
import Footer from './Footer';
import ReservationButton from './components/ReservationButton';
import OrderButton from './components/OrderButton';
import { Carousel, Button, Card, CardGroup,} from 'react-bootstrap';
import img1 from './img/img-1.jpeg';
import img2 from './img/img-2.jpeg';
import img3 from './img/img-3.jpeg';
import img4 from './img/img-4.jpeg';
import img5 from './img/img-5.jpeg';
import img6 from './img/img-6.jpeg';
import img7 from './img/img-7.jpeg';
import './Home.css';
import Map from './components/Map';
import 'leaflet/dist/leaflet.css';
import ReservationForm from './components/ReservationForm';
import { Link } from "react-router-dom";
import {db} from './firebase/firebaseConfig'
import {useEffect, useState} from 'react';
import {doc, getDoc} from 'firebase/firestore';


function Home() {

    const [welcomeMessage, setWelcomeMessage] = useState([]);
    useEffect(() => {
        (async () => {
            const data = await getDoc(doc(db, "storeInfo", "welcomeMessage"));
            setWelcomeMessage(data.data());
        })();
    }, []);

    return (
        <div className="home">
            <Navigation />
            <Carousel fade style={{ minHeight: "100%" }}>
                <Carousel.Item>
                    <img
                    className="hero-img"
                    src={img2}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3><OrderButton/>{' '}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img

                    className="w-100 d-block"
                    src={img2}

                    alt="Second slide"
                    />

                    <Carousel.Caption> 
                    <h3><Button variant="outline-light" size="lg"><ReservationButton/></Button>{' '}</h3>

                    </Carousel.Caption>
                </Carousel.Item>
             
            </Carousel>
            
            <div className="intro text-center">
                <h1>Welcome to Asian N Cajun 2</h1>
                <p className="info">{welcomeMessage.article}</p>
            </div>
            <div className="menu_options text-center">
                <CardGroup>
                    <Card class="home-card">
                        <Card.Body class="home-card-body">
                            <Card.Title class="home-card-title">Menu</Card.Title>
                            <Card.Link href="/menu">
                                <button class="btn btn-primary card-button" variant='outline-light'>
                                    View Menu
                                </button>
                            </Card.Link>
                        </Card.Body>
                    </Card>
                    <Card class="home-card">
                        <Card.Body class="home-card-body">
                            <Card.Title class="home-card-title">Book a Table</Card.Title>
                            <Card.Link> 
                                <button class="btn btn-primary card-button" variant='outline-light'>
                                    <ReservationButton/> 
                                </button>
                            </Card.Link> 
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
             <div className="food_imgs text-center">
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={img5} className="cover-img"/>
            
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img6} className="cover-img"/>
              
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img7} className="cover-img"/>
            
                    </Card>
                </CardGroup>
            </div> 
        
            <Footer/>         
        </div>
    
    )
}

export default Home