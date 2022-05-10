import React from 'react'
import { Form, FormControl, Toast, ToastContainer,
         FormGroup, FormLabel, Button, Row, Col, Table } from 'react-bootstrap';
import './Home.css';

import { doc, setDoc, getDocs, query, orderBy, deleteDoc} from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { storage, storeInfo_db, db, careerInfo_db, jobListings_db, Full_Menu, reservation_db } from './firebase/firebaseConfig';
import { uploadBytes, ref } from '@firebase/storage';
import { useAuth } from "./contexts/AuthContext"
import { useNavigate } from 'react-router-dom';
import Categories from './Categories';
import isoDate from './components/ISOdate';

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

    const [activeCategory, setActiveCategory] = useState();

    const [storeHours, setStoreHours] = useState([]);
    const [aboutInfo, setAboutInfo] = useState([]);
    const [welcomeMessage, setWelcomeMessage] = useState([]);
    const [menu, setMenu] = useState([]);
    const [careersInfo, setCareersInfo] = useState([]);
    const [jobListings, setJobListings] = useState([]);
    const [bannerAlert, setBannerAlert] = useState([]);
    const [reservation, setReservation] = useState([]);

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
            setBannerAlert(data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                .find(item => item.id === "BannerAlert")
            );
            
            //come back to this for review 
            // data = await getDocs(reservation_db);
            // getReservation(data.docs.map((doc) => ({ ...doc.data(), id: doc.id}))
            // .find(item => item.id === "ReservationList")
            // ); 
            
            data = await getDocs(reservation_db);
            setReservation(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
            console.log(reservation.sort((a, b) => console.log(a.date)));

            data = await getDocs(Full_Menu);
            setMenu(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));

            data = await getDocs(query(careerInfo_db, orderBy("id")));
            setCareersInfo(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            
            data = await getDocs(query(jobListings_db));
            setJobListings(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })();
    }, []);

    const submitHome = async (event) => {
        await new Promise((resolve, reject) => {
            try{
                setDoc(doc(db, "storeInfo", "BannerAlert"), {
                    enabled: document.getElementById('bannerAlert_enabled').checked, 
                    header: document.getElementById('bannerAlert_header').value,
                    message: document.getElementById('bannerAlert_message').value
                });
                setDoc(doc(db, "storeInfo", "welcomeMessage"), {
                    article: document.getElementById('welcomeMessage').value
                });
                Array.from(document.querySelectorAll("input[type='file']")).forEach(element => {
                    if(element.files[0] !== undefined){
                        const filename = 'gs://asian-n-cajun-db.appspot.com/site_images/' + element.id + '.jpg';
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
        await new Promise((resolve, reject) => {
            try{
                menu.filter((item) => item.Category === activeCategory).map((item) => {
                    var newName = document.getElementById(`${item.Name.split(' ').join('')}-name`).value;
                    var imageInput = document.getElementById(`${item.Name.split(' ').join('')}-image`).files[0];

                    setDoc(doc(db, "Full_Menu", item.id), {
                        Category: item.Category,
                        Name: document.getElementById(`${item.Name.split(' ').join('')}-name`).value, 
                        Description: document.getElementById(`${item.Name.split(' ').join('')}-desc`).value, 
                        Price: document.getElementById(`${item.Name.split(' ').join('')}-price`).value, 
                        ImageURL: (imageInput === undefined) ? item.ImageURL : `https://firebasestorage.googleapis.com/v0/b/asian-n-cajun-db.appspot.com/o/menu_img%2F${newName.split(' ').join('-')}.jpg?alt=media`
                    });
                    if (imageInput !== undefined){
                        const filename = `gs://asian-n-cajun-db.appspot.com/menu_img/${newName.split(' ').join('-')}.jpg`;
                        const storageRef = ref(storage, filename);
                        uploadBytes(storageRef, imageInput);
                    }
                });

        setShow(true);
            }catch(err){
                console.log(err);
            }
        });
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
                    const filename = 'gs://asian-n-cajun-db.appspot.com/site_images/aboutBackgroundImage.jpg';
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
    };

    function deleteReservation(reserv, callback) {
        
        const deleteRes = async () => {
            await deleteDoc(doc(db, "reservations", reserv.id));
        };
        deleteRes();
        
        console.log('Reservation for ' + reserv.date + ' at ' + reserv.time + ' has been deleted');
        setTimeout(callback, 250);
        
        // * Deletion email here
    };

    function reloadReservation() {

        const delRefresh = async () => {
            window.location.reload();
        };
        delRefresh();
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
                            <legend>
                                Banner Message (Optional)
                                <Form.Check type="switch" id="bannerAlert_enabled" label="Enable banner" defaultChecked={bannerAlert.enabled}/>
                            </legend>
                            <FormControl id="bannerAlert_header" defaultValue={bannerAlert.header}/>
                            <FormControl id="bannerAlert_message" as="textarea" defaultValue={bannerAlert.message} rows={2}/>
                        </fieldset>
                        
                        <fieldset>
                            <legend>Welcome Message</legend>
                            <FormControl id="welcomeMessage" as="textarea" defaultValue={welcomeMessage.article} rows={4}/>
                        </fieldset>

                        <small>**Enter all image files as .jpg format</small>

                        <fieldset>
                            <legend>Hero Image</legend>
                            <FormControl id="homeSlideImage" type="file" accept=".jpg, .jpeg"/>
                        </fieldset>

                        <fieldset>
                            <legend>Hero Image for Smaller Screen Resolutions</legend>
                            <FormControl id="homeSlideImage_small" type="file" accept=".jpg, .jpeg"/>
                        </fieldset>

                        <fieldset>
                            <legend>First Teaser Image</legend>
                            <FormControl id="firstTeaserImage" type="file" accept=".jpg, .jpeg"/>
                        </fieldset>

                        <fieldset>
                            <legend>Second Teaser Image</legend>
                            <FormControl id="secondTeaserImage" type="file" accept=".jpg, .jpeg"/>
                        </fieldset>

                        <fieldset>
                            <legend>Third Teaser Image</legend>
                            <FormControl id="thirdTeaserImage" type="file" accept=".jpg, .jpeg"/>
                        </fieldset>

                        <Button className='b_save' onClick={submitHome}>Save</Button>
                    </section>

                    <section className={toggleState === 'menu' ? "" : "hide"} >
                        <h2>Menu</h2>

                        <Categories
                            setActiveCategory={setActiveCategory}
                            activeCategory={activeCategory}
                        />
                        <small>**Enter all image files as .jpg format</small>
                        {menu.filter((item) => item.Category === activeCategory).map((item) => {
                            return (
                                <fieldset key={item.id} className='mb-5'>
                                    <legend><FormControl id={`${item.Name.split(' ').join('')}-name`} defaultValue={item.Name}/></legend>
                                    <Row className='mx-1'>
                                        <FormGroup as={Col} className="">
                                            <FormLabel>Image</FormLabel>
                                            <FormControl id={`${item.Name.split(' ').join('')}-image`} type="file" accept=".jpg, .jpeg"/>
                                        </FormGroup>
                                        <FormGroup as={Col} className="">
                                            <FormLabel>Description</FormLabel>
                                            <FormControl id={`${item.Name.split(' ').join('')}-desc`} as="textarea" defaultValue={item.Description} rows={1}/>
                                        </FormGroup>
                                        <Col sm={2}>
                                            <FormGroup className="">
                                                <FormLabel>Price</FormLabel>
                                                <FormControl id={`${item.Name.split(' ').join('')}-price`} defaultValue={item.Price}/>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                        </fieldset>
                            );
                        })}

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
                            <small>**Enter image file as .jpg format</small>
                            <FormControl id="aboutBackgroundImage" type="file" accept=".jpg, .jpeg"/>
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
                            <legend>Reservations scheduled for today</legend>
                            <div className="reservation_Test" >
                                {reservation.map((item) => {
                                    const today = new Date();
                                    if (item.date === isoDate(today)) {
                                        return <Table responsive striped bordered hover key={item.id}>
                                            <thead>
                                                <tr>
                                                <th>Date </th>
                                                <th>Time </th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Email / Phone number </th>
                                                <th>Guests </th>
                                                <th>Notes: </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                <td> {item.date}</td>
                                                <td> {item.time}</td>
                                                <td> {item.fname} </td>
                                                <td>{item.lname}</td>
                                                <td>{item.email +" / "+ item.phoneNum}</td>
                                                <td>{item.guests}</td>
                                                <td>{item.notes}</td>
                                                </tr>
                                            </tbody>
                                            <Button className='res_delete_button' variant='danger'
                                                onClick={() => {
                                                    deleteReservation(item, reloadReservation);
                                                }}
                                            >
                                                Delete
                                            </Button>
                                        </Table>
                                    }}
                                )}
                                <legend>All Reservations</legend>
                                {reservation.map((item) => 
                                { return <div className='admin_res_container' key={item.id}> 
                                <Table responsive striped bordered hover key={item.id}>
                                    <thead>
                                        <tr>
                                        <th>Date </th>
                                        <th>Time </th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email / Phone number </th>
                                        <th>Guests </th>
                                        <th>Notes: </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td> {item.date}</td>
                                        <td> {item.time}</td>
                                        <td> {item.fname} </td>
                                        <td>{item.lname}</td>
                                        <td>{item.email +" / "+ item.phoneNum}</td>
                                        <td>{item.guests}</td>
                                        <td>{item.notes}</td>
                                        </tr>
                                    </tbody>
                                    <Button className='res_delete_button' variant='danger'
                                        onClick={() => {
                                            deleteReservation(item, reloadReservation);
                                        }}
                                    >
                                        Delete
                                    </Button>
                                </Table>
                                </div>})}
                            </div>
   
                        </fieldset>

                        <Button className='b_save' onClick={submitReservations}>Save</Button>
                    </section>
                </div>
            </div>
        </>
    );
}

export default AdminPortal