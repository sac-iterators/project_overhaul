import React from 'react'
import logo from './img/logo.jpg';
import SignInButton from './components/SignInButton';
import ReservationButton from './components/ReservationButton';
import CareersButton from './components/CareersButton';
import grubhub from './img/grubhub.svg';
import ubereats from './img/ubereats.svg';
import postmates from './img/postmates.svg';
import yelp from './img/yelp.svg';

function Footer() {
  const script = document.createElement('script');
  script.src = "https://kit.fontawesome.com/68b7bc0ca8.js";
  script.crossOrigin = 'anonymous';
  document.body.appendChild(script);
  return (
    <footer class="bg-black">
      <div class="container">
        <div class="row py-4">
          <div class="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src={logo} alt="Second slide" class="logo"/>
            <ul class="list-inline social-links">
              <li class="list-inline-item"><a href="http://www.facebook.com/asianncajun2" target="_blank" title="facebook"><i class="fa fa-facebook social"></i></a></li>
              <li class="list-inline-item"><a href="http://www.instagram.com/asianncajun2" target="_blank" title="instagram"><i class="fa fa-instagram social"></i></a></li>
              <li className="list-inline-item"><a href="mailto:sac.iterators@gmail.com" target="_blank" title="email"><i className="fa-solid fa-envelope social"></i></a></li>
            </ul>

            <ul class="list-inline services">
              <li class=""><a href="https://www.grubhub.com/restaurant/new-asian-n-cajun-2-greenback-ln-8121-greenback-ln-fair-oaks/3048809" target="_blank"><img src="https://cdn.cdnlogo.com/logos/g/61/grubhub.svg" class="icons"/></a></li>
              <li class=""><a href="https://www.ubereats.com/store/asian-n-cajun-2/m7JzYDLnRESi966_6EHoSg?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkFzaWFuJTIwTiclMjBDYWp1biUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmM4YzlhY2FkLTRjZjEtMTg1ZS1iMDE5LWVmMmFlZmFiYWIxNSUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBMzguNjQ5MDYlMkMlMjJsb25naXR1ZGUlMjIlM0EtMTIxLjUxMDA5NjclN0Q%3D" 
                target="_blank"><img src="https://img.icons8.com/color/48/000000/uber-eats-app.png" class="icons"/></a></li>
              <li class=""><a href="https://postmates.com/store/asian-n-cajun-2/m7JzYDLnRESi966_6EHoSg" target="_blank"><img src="https://iconape.com/wp-content/files/rd/245476/png/postmates-logo.png" class="icons"/></a></li>

            </ul>
          </div>
          <div className="col-lg-2 col-md-6 col-12 mb-4 mb-lg-0 mx-auto col storeinfo">
            <h6 className="text-uppercase font-weight-bold mb-4">Store Hours</h6>
            <ul className="list-unstyled mb-4 hours">
              <li><p className="text-muted mb-2">Mon-Fri 11am - 9pm</p></li>
              <li><p className="text-muted mb-2">Sat         11am - 9pm</p></li>
              <li><p className="text-muted mb-2">Sun        11am - 9pm</p></li>
            </ul>
            <h6 className="text-uppercase font-weight-bold mb-4">Location</h6>
            <ul className="list-unstyled mb-0 location">
              <li>
                <a href="https://www.google.com/maps/place/8121+Greenback+Ln,+Fair+Oaks,+CA+95628" target="_blank">
                  8121 Greenback Ln
                  Fair Oaks, CA 95628
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0 mx-auto col emailsignup">
            <h6 className="text-uppercase font-weight-bold mb-4">Sign up for offers and other news!</h6>
            <p className="text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>
            <div className="p-1 rounded border">
              <div className="input-group">
                <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1" className="form-control border-0 shadow-0"/>
                <div className="input-group-append">
                  <button id="button-addon1" type="submit" className="btn btn-link"><i className="fa fa-paper-plane"></i></button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6  col-12 mb-lg-0 mx-auto col sitemap">
            <h6 className="text-uppercase font-weight-bold mb-4">Sitemap</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2"><SignInButton /></li>
              <li className="mb-2"><CareersButton/></li>
              <li className="mb-2"><a href="./about" className="">About</a></li>
              <li className="mb-2"><a href="./menu" className="">Menu</a></li>
              <li className="mb-2"><ReservationButton/></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container text-center">
          <p className="text-muted">© 2022 AsianNCajun2 All rights reserved.</p>
        </div>
      </div>
    </footer>    
  );
}

export default Footer