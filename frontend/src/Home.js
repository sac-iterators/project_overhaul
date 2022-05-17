import React from 'react'
import Navigation from './Navigation';
import Footer from './Footer';
import ReservationButton from './components/ReservationButton';
import OrderButton from './components/OrderButton';
import { Carousel, Button, Card, CardGroup,} from 'react-bootstrap';
import './Home.css';
import 'leaflet/dist/leaflet.css';

import {db} from './firebase/firebaseConfig'
import {useEffect, useState} from 'react';
import {doc, getDoc} from 'firebase/firestore';
import Banner from './components/Banner';


function Home() {

    // implemented function to the "View Full Menu" button
    const [welcomeMessage, setWelcomeMessage] = useState([]);
    const [teaserImages, setTeaserImages] = useState([]);
    useEffect(() => {
        (async () => {
            let data;
            
            data = await getDoc(doc(db, "storeInfo", "welcomeMessage"));
            setWelcomeMessage(data.data());

            data = await getDoc(doc(db, "storeInfo", "homeTeaserImages"));
            setTeaserImages(data.data());
        })();
    }, []);

    return (
        <div className="home">
            <Navigation />
            <Banner />
            <Carousel fade style={{ minHeight: "100%" }}>
                <Carousel.Item>
                    <img
                    className="hero-img"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3><OrderButton/>{' '}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="hero-img"
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
                    <Card className="home-card">
                        <Card.Body className="home-card-body">
                            <Card.Title className="home-card-title">Menu</Card.Title>
                            <Card.Link href="/menu">
                                <button className="btn btn-primary card-button" variant='outline-light'>
                                    View Menu
                                </button>
                            </Card.Link>
                        </Card.Body>
                    </Card>
                    <Card className="home-card">
                        <Card.Body className="home-card-body">
                            <Card.Title className="home-card-title">Book a Table</Card.Title>
                            <Card.Link> 
                                <button className="btn btn-primary card-button" variant='outline-light'>
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
                        <Card.Img variant="top" src={teaserImages.ImageURL1} className="cover-img"/>
            
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={teaserImages.ImageURL2} className="cover-img"/>
              
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={teaserImages.ImageURL3} className="cover-img"/>
            
                    </Card>
                </CardGroup>
            </div> 
        
            <Footer/>         
        </div>
    
    )
}

export default Home