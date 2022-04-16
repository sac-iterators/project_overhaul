import React from 'react'
import { InputGroup, FormControl, Toast, ToastContainer,
         FormGroup, FormLabel, Button, Row, Col } from 'react-bootstrap';
import SignInButton from './components/SignInButton';
import './Home.css';

import {collection, doc, setDoc, addDoc, getDoc, docSnap} from 'firebase/firestore';
import { useState, useEffect, ReactDOM} from 'react';
import { storeInfo, db } from './firebase/firebaseConfig';

function AdminPortal() {

    const [show, setShow] = useState(false);
    const [toggleState, setToggleState] = useState('home');

    const toggleTab = (tabIndex) => {
        setToggleState(tabIndex);
    };

    const [about, setAbout] = useState([]);
    const [hours, setHours] = useState([]);
    useEffect(() => {
        const getAbout = async () => {
            const data = await getDoc(doc(db, "storeInfo", "AboutUs"));
            setAbout(data.data());
        };
        const getHours = async () => {
            const data = await getDoc(doc(db, "storeInfo", "storeHours"));
            setHours(data.data());
        };

        getAbout();
        getHours();
    }, []);

    const submitMenu = (event) => {
        
    }

    const submitAbout = async (event) => {
        setDoc(doc(db, "storeInfo", "AboutUs"), {
            article: document.getElementById('aboutArticle').value
        });
        setDoc(doc(db, "storeInfo", "storeHours"), {
            "Mon-Fri": document.getElementById('weekdayHours').value,
            "Sat": document.getElementById('satHours').value,
            "Sun": document.getElementById('sunHours').value
        });
        //document.blur();
        setShow(true);
    }

    const submitCareers = (event) => {
        
    }

    const submitReservations = (event) => {
        
    }

    return (
        /*<SignInButton/>*/
        <>
            <body className="admin">
                <ToastContainer className="p-3" position="top-center">
                    <Toast onClose={() => setShow(false)} show={show} delay={3000} bg='success' autohide>
                        <Toast.Body className="text-center text-white">
                            Changes have been successfully added
                        </Toast.Body>
                    </Toast>
                </ToastContainer>
                <div class="sidenav">
                    <label className='header'>Asian N Cajun Portal</label>
                    <hr></hr>
                    <button className={toggleState === 'home' ? "tabs active" : "tabs"} 
                            onClick={() => toggleTab('home')}>
                        Home Page
                    </button>
                    <button className={toggleState === 'menu' ? "tabs active" : "tabs"} 
                            onClick={() => toggleTab('menu')}>
                        Menu Page
                    </button>
                    <button className={toggleState === 'about' ? "tabs active" : "tabs"} 
                            onClick={() => toggleTab('about')}>
                        About Page
                    </button>
                    <button className={toggleState === 'careers' ? "tabs active" : "tabs"} 
                            onClick={() => toggleTab('careers')}>
                        Careers
                    </button>
                    <button className={toggleState === 'reservations' ? "tabs active" : "tabs"} 
                            onClick={() => toggleTab('reservations')}>
                        Reservation
                    </button>
                </div>

                <div class="main">

                    <section className={toggleState === 'home' ? "" : "hide"}>
                        <h2>Dashboard</h2>

                    </section>

                    <section className={toggleState === 'menu' ? "" : "hide"} >
                        <h2>Menu</h2>

                        <fieldset>
                            <legend>Element Name</legend>
                            <FormControl id="" defaultValue={about.article} rows={2}/>
                        </fieldset>

                        <Button className='b_save' onClick={submitMenu}>Save</Button>
                    </section>

                    <section className={toggleState === 'about' ? "" : "hide"} >
                        <h2>About Us</h2>

                        <fieldset>
                            <legend>About Article</legend>
                            <FormControl id="aboutArticle" as="textarea" aria-label="With textarea"
                            defaultValue={about.article} rows={4}/>
                        </fieldset>
                        
                        <fieldset>
                            <legend>Store Hours</legend>
                            <Row className='mx-3'>
                                <FormGroup as={Col} className="">
                                    <FormLabel>Mon-Fri</FormLabel>
                                    <FormControl id="weekdayHours" defaultValue={hours["Mon-Fri"]}/>
                                </FormGroup>
                                <FormGroup as={Col}>
                                    <FormLabel>Sat</FormLabel>
                                    <FormControl id="satHours" defaultValue={hours["Sat"]}/>
                                </FormGroup>
                                <FormGroup as={Col}>
                                    <FormLabel>Sun</FormLabel>
                                    <FormControl id="sunHours" defaultValue={hours["Sat"]}/>
                                </FormGroup>
                            </Row>
                        </fieldset>
                        
                        <Button className='b_save' onClick={submitAbout}>Save</Button>

                    </section>
                    
                    <section className={toggleState === 'careers' ? "" : "hide"} >
                        <h2>Careers</h2>

                        <fieldset>
                            <legend>Element Name</legend>
                            <FormControl id="" defaultValue={about.article} rows={2}/>
                        </fieldset>

                        <Button className='b_save text-right' onClick={submitCareers}>Save</Button>

                    </section>

                    <section className={toggleState === 'reservations' ? "" : "hide"} >
                        <h2>Reservations</h2>

                        <fieldset>
                            <legend>Element Name</legend>
                            <FormControl id="" defaultValue={about.article} rows={2}/>
                        </fieldset>

                        <Button className='b_save' onClick={submitReservations}>Save</Button>
                    </section>
                </div>
            </body>
        </>
    );
}

export default AdminPortal
