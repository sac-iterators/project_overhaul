import React from 'react'
import { FormControl, Toast, ToastContainer,
         FormGroup, FormLabel, Button, Row, Col } from 'react-bootstrap';
import './Home.css';

import { doc, setDoc, getDocs, query, orderBy} from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { storage, storeInfo_db, db, careerInfo_db, jobListings_db } from './firebase/firebaseConfig';
import { uploadBytes, ref } from '@firebase/storage';
import { useAuth } from "./contexts/AuthContext"
import { useNavigate } from 'react-router-dom';

function AdminPortal() {
    const navigate = useNavigate();
    const { logout }  = useAuth();
    async function handleLogout() {
        try {
            await logout()
            navigate('/admin')
        } catch {
            console.log("Failed to logout");
        }
    }

    const [show, setShow] = useState(false);
    const [toggleState, setToggleState] = useState('home');

    const toggleTab = (tabIndex) => { setToggleState(tabIndex); };

    const [storeHours, setStoreHours] = useState([]);
    const [aboutInfo, setAboutInfo] = useState([]);
    const [welcomeMessage, setWelcomeMessage] = useState([]);
    const [careersInfo, setCareersInfo] = useState([]);
    const [jobListings, setJobListings] = useState([]);

    useEffect(() => {
        (async () => {
            let data;

            data = await getDocs(storeInfo_db);
            setStoreHours(data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                .find(item => item.id === "storeHours")
            );
            setAboutInfo(data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                .find(item => item.id === "AboutUs")
            );
            setWelcomeMessage(data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                .find(item => item.id === "welcomeMessage")
            );

            data = await getDocs(query(careerInfo_db, orderBy("id")));
            setCareersInfo(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            
            data = await getDocs(query(jobListings_db));
            setJobListings(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })();
    }, []);

    const submitHome = async (event) => {
        await new Promise((resolve, reject) => {
            try{
                setDoc(doc(db, "storeInfo", "welcomeMessage"), {
                    article: document.getElementById('welcomeMessage').value
                });
                Array.from(document.querySelectorAll("input[type='file']")).forEach(element => {
                    if(element.files[0] !== undefined){
                        const filename = 'gs://asian-n-cajun-db.appspot.com/site_images/' + element.id + '.jpeg';
                        const storageRef = ref(storage, filename);
                        uploadBytes(storageRef, element.files[0]);
                    }
                })
                setShow(true);
            }catch(err){
                console.log(err);
            }
        });
    }
    
    const submitMenu = async (event) => {

        setShow(true);
    }

    const submitAbout = async (event) => {
        await new Promise((resolve, reject) => {
            try{
                setDoc(doc(db, "storeInfo", "AboutUs"), {
                    article: document.getElementById('aboutArticle').value
                });
                setDoc(doc(db, "storeInfo", "storeHours"), {
                    "Mon-Fri": document.getElementById('weekdayHours').value,
                    "Sat": document.getElementById('satHours').value,
                    "Sun": document.getElementById('sunHours').value
                });
                if(document.getElementById('aboutBackgroundImage').files[0] !== undefined){
                    const filename = 'gs://asian-n-cajun-db.appspot.com/site_images/aboutBackgroundImage.jpeg';
                    const storageRef = ref(storage, filename);
                    uploadBytes(storageRef, document.getElementById('aboutBackgroundImage').files[0]);
                }
                setShow(true);
            }catch(err){
                console.log(err);
            }
        });
        setShow(true);
    }

    const submitCareers = async (event) => {


        setShow(true);
    }

    const submitReservations = async (event) => {

        setShow(true);
    }

    return (
        <>
            <div className="admin">
                <ToastContainer className="p-3" position="top-center">
                    <Toast onClose={() => setShow(false)} show={show} delay={3000} bg='success' autohide>
                        <Toast.Body className="text-center text-white">
                            Changes have been successfully added
                        </Toast.Body>
                    </Toast>
                </ToastContainer>
                <div className="sidenav">
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
                    {/*<button className={toggleState === 'careers' ? "tabs active" : "tabs"} 
                            onClick={() => toggleTab('careers')}>
                        Careers
                    </button>*/}
                    <button className={toggleState === 'reservations' ? "tabs active" : "tabs"} 
                            onClick={() => toggleTab('reservations')}>
                        Reservation
                    </button>
                    <Button id="b_logout" variant="secondary" className='w-100' onClick={handleLogout}>
                        Log Out
                    </Button>
                </div>

                <div className="main">

                    <section className={toggleState === 'home' ? "" : "hide"}>
                        <h2>Home Page</h2>

                        <fieldset>
                            <legend>Welcome Message</legend>
                            <FormControl id="welcomeMessage" as="textarea" defaultValue={welcomeMessage.article} rows={4}/>
                        </fieldset>

                        <fieldset>
                            <legend>Hero Image</legend>
                            <FormControl id="homeSlideImage" type="file"/>
                        </fieldset>

                        <fieldset>
                            <legend>Hero Image for Smaller Screen Resolutions</legend>
                            <FormControl id="homeSlideImage_small" type="file"/>
                        </fieldset>

                        <fieldset>
                            <legend>First Teaser Image</legend>
                            <FormControl id="firstTeaserImage" type="file"/>
                        </fieldset>

                        <fieldset>
                            <legend>Second Teaser Image</legend>
                            <FormControl id="secondTeaserImage" type="file"/>
                        </fieldset>

                        <fieldset>
                            <legend>Third Teaser Image</legend>
                            <FormControl id="thirdTeaserImage" type="file"/>
                        </fieldset>

                        <Button className='b_save' onClick={submitHome}>Save</Button>
                    </section>

                    <section className={toggleState === 'menu' ? "" : "hide"} >
                        <h2>Menu</h2>

                        <fieldset>
                            <legend>Element Name</legend>
                            <FormControl id="" rows={2}/>
                        </fieldset>

                        <Button className='b_save' onClick={submitMenu}>Save</Button>
                    </section>

                    <section className={toggleState === 'about' ? "" : "hide"} >
                        <h2>About Us</h2>

                        <fieldset>
                            <legend>About Article</legend>
                            <FormControl id="aboutArticle" as="textarea" defaultValue={aboutInfo.article} rows={4}/>
                        </fieldset>

                        <fieldset>
                            <legend>Background Image</legend>
                            <FormControl id="aboutBackgroundImage" type="file"/>
                        </fieldset>

                        <fieldset>
                            <legend>Store Hours</legend>
                            <Row className='mx-3'>
                                <FormGroup as={Col} className="">
                                    <FormLabel>Mon-Fri</FormLabel>
                                    <FormControl id="weekdayHours" defaultValue={storeHours["Mon-Fri"]}/>
                                </FormGroup>
                                <FormGroup as={Col}>
                                    <FormLabel>Sat</FormLabel>
                                    <FormControl id="satHours" defaultValue={storeHours["Sat"]}/>
                                </FormGroup>
                                <FormGroup as={Col}>
                                    <FormLabel>Sun</FormLabel>
                                    <FormControl id="sunHours" defaultValue={storeHours["Sun"]}/>
                                </FormGroup>
                            </Row>
                        </fieldset>

                        <Button className='b_save' onClick={submitAbout}>Save</Button>

                    </section>

                    <section className={toggleState === 'careers' ? "" : "hide"} >
                        <h2>Career Info</h2>
                        <fieldset>
                            {careersInfo.map((item) => {
                                return (
                                    <FormGroup key={item.id}>
                                        <legend>{item.title}</legend>
                                        <FormControl as="textarea" defaultValue={item.content} rows={2}/>
                                    </FormGroup>
                                );
                            })}
                        </fieldset>

                        <h2>Job Listings</h2>
                        <fieldset>
                            {jobListings.map((item) => {
                                return (
                                    <FormGroup key={item.id}>
                                        <legend>{item.title}</legend>
                                        <FormControl as="textarea" defaultValue={item.content} rows={2}/>
                                    </FormGroup>
                                );
                            })}
                        </fieldset>

                        <Button className='b_save text-right' onClick={submitCareers}>Save</Button>

                    </section>

                    <section className={toggleState === 'reservations' ? "" : "hide"} >
                        <h2>Reservations</h2>

                        <fieldset>
                            <legend>Element Name</legend>
                            <FormControl id=""  rows={2}/>
                        </fieldset>

                        <Button className='b_save' onClick={submitReservations}>Save</Button>
                    </section>
                </div>
            </div>
        </>
    );
}

export default AdminPortal