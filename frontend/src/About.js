import React from 'react'
import Footer from './Footer';
import Navigation from './Navigation';
import './Home.css';
import {useEffect, useState} from 'react';
import {doc, getDoc} from 'firebase/firestore';
import { db } from './firebase/firebaseConfig';

function About() {
    const [aboutInfo, setAboutInfo] = useState([]);
    useEffect(() => {
        const getAboutInfo = async () => {
            const data = await getDoc(doc(db, "storeInfo", "AboutUs"));
            setAboutInfo(data.data());
        };
        getAboutInfo();
    }, []);
    return (
        <div className="about">
            <Navigation />
            <div className="top-section">
                <div className='panel'>
                    <h2>About</h2>
                    <p className="info vertical-scroll">{aboutInfo.article}</p>
                </div>
            </div>
            <Footer/>          
        </div>
    )
}

export default About

