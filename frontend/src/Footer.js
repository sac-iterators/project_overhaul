import React from 'react'
import ReservationButton from './components/ReservationButton';
import {doc, getDoc} from 'firebase/firestore';
import {useEffect, useState} from 'react';
import { db } from './firebase/firebaseConfig';
import Map from './components/Map';
import grubhub from './img/grubhub_icon.svg'
import ubereats from './img/ubereats_icon.svg'
import postmates from './img/postmates_icon.svg'
import doordash from './img/doordash_icon.svg'
import yelp from './img/yelp_icon.svg'

function Footer() {
  const script = document.createElement('script');
  script.src = "https://kit.fontawesome.com/68b7bc0ca8.js";
  script.crossOrigin = 'anonymous';
  document.body.appendChild(script);

  const [hours, setHours] = useState([]);
  useEffect(() => {
    const getHours = async () => {
        const data = await getDoc(doc(db, "storeInfo", "storeHours"));
        setHours(data.data());
    };
    getHours();
}, []);

  return (
    <footer className="bg-black">
      
      <div className="">
        <div className="row py-4">
          <div className="col-lg-5 col-md-6 col-12 mb-4 mb-lg-0">
            {/**<h1 className='text-center'>AsianNCajun2</h1> */}
            <Map/>
            <ul className="list-inline social-links">

              <li className="list-inline-item"><a href="http://www.instagram.com/asianncajun2" target="_blank" rel="noreferrer" title="instagram"><i className="fa fa-instagram social"></i></a></li>
              <li className="list-inline-item"><a href="mailto:sac.iterators@gmail.com" target="_blank" rel="noreferrer" title="email"><i className="fa-solid fa-envelope social"></i></a></li>
            </ul>

            <ul className="list-inline services">
              <li className="list-inline-item"><a href="https://www.grubhub.com/restaurant/new-asian-n-cajun-2-greenback-ln-8121-greenback-ln-fair-oaks/3048809" target="_blank" rel="noreferrer"><img src={grubhub} className="icons" alt="Grubhub icon"/></a></li>
              <li className="list-inline-item"><a href="https://www.ubereats.com/store/asian-n-cajun-2/m7JzYDLnRESi966_6EHoSg" target="_blank" rel="noreferrer"><img src={ubereats} className="icons" alt="Ubereats icon"/></a></li>
              <li className="list-inline-item"><a href="https://postmates.com/store/asian-n-cajun-2/m7JzYDLnRESi966_6EHoSg" target="_blank" rel="noreferrer"><img src={postmates} className="icons" alt="Postmates icon"/></a></li>
              <li className="list-inline-item"><a href="https://www.doordash.com/store/asian-n-cajun-2-fair-oaks-2500327" target="_blank" rel="noreferrer"><img src={doordash} className="icons" alt="Doordash icon"/></a></li>
              <li className="list-inline-item"><a href="https://www.yelp.com/biz/asian-n-cajun-2-fair-oaks-2" target="_blank" rel="noreferrer"><img src={yelp} className="icons" alt="Yelp icon"/></a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-4 col-8 mb-4 mb-lg-0 mx-auto col storeinfo">
            <h6 className="footer-title text-uppercase font-weight-bold mb-4">Store Hours</h6>
            <ul className="list-unstyled mb-4 hours">
            <li>
                <p className='days'>Mon-Fri</p>
                <p className="text-muted mb-2">{hours["Mon-Fri"]}</p>
              </li>
              <li>
                <p className='days'>Sat</p>
                <p className="text-muted mb-2">{hours["Sat"]}</p>
              </li>
              <li>
                <p className='days'>Sun</p>
                <p className="text-muted mb-2">{hours["Sun"]}</p>
              </li>
            </ul>
            <h6 className="footer-title text-uppercase font-weight-bold mb-4">Location</h6>
            <ul className="list-unstyled mb-0 location">
              <li>
                <a href="https://www.google.com/maps/place/8121+Greenback+Ln,+Fair+Oaks,+CA+95628" target="_blank" rel="noreferrer">
                  8121 Greenback Ln
                  Fair Oaks, CA 95628
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-1 col-md-2 col-4 mb-lg-0 mx-auto col phoneNum">
            <h6 className="footer-title text-uppercase font-weight-bold mb-4">Phone Number</h6>
            <ul className="list-unstyled mb-0 phoneNum">
              <li>
              <a href="tel:916-242-0596">
                916-242-0596
              </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-1 col-md-2 col-4 mb-lg-0 mx-auto col sitemap">
            <h6 className="footer-title text-uppercase font-weight-bold mb-4">Sitemap</h6>
            <ul className="list-unstyled mb-0">
              {/*<li className="mb-2"><CareersButton/></li>*/}
              <li className="mb-2"><a href="./about" className="">About</a></li>
              <li className="mb-2"><a href="./menu" className="">Menu</a></li>
              <li className="mb-2 text-muted"><ReservationButton/></li>
            </ul>
          </div>
        </div>
        <div className="container text-center">
          <p className="copyright text-muted">© 2022 AsianNCajun2 All rights reserved.</p>
        </div>
      </div>
    </footer>    
  );
}

export default Footer