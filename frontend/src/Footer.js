import React from 'react'
import logo from './img/logo.jpg';
import SignInButton from './components/SignInButton';
import ReservationButton from './components/ReservationButton';
import CareersButton from './components/CareersButton';

function Footer() {
    const script = document.createElement('script');
    script.src = "https://kit.fontawesome.com/68b7bc0ca8.js";
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);

  return (
    <footer class="bg-white">
      <div class="container">
        <div class="row py-4">
          <div class="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src={logo} alt="Second slide" class="logo"/>
            <ul class="list-inline social-links">
              <li class="list-inline-item"><a href="http://www.facebook.com/asianncajun2" target="_blank" title="facebook"><i class="fa fa-facebook social"></i></a></li>
              <li class="list-inline-item"><a href="http://www.instagram.com/asianncajun2" target="_blank" title="instagram"><i class="fa fa-instagram social"></i></a></li>
            </ul>
            <ul class="list-inline services">
              <li class=""><a href="https://www.grubhub.com/restaurant/new-asian-n-cajun-2-greenback-ln-8121-greenback-ln-fair-oaks/3048809" target="_blank"><img src="https://cdn.cdnlogo.com/logos/g/61/grubhub.svg" class="icons"/></a></li>
              <li class=""><a href="#" target="_blank"><img src="https://img.icons8.com/color/48/000000/uber-eats-app.png" class="icons"/></a></li>
              <li class=""><a href="#" target="_blank"><img src="https://iconape.com/wp-content/files/rd/245476/png/postmates-logo.png" class="icons"/></a></li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-4">Store Hours</h6>
          <ul class="list-unstyled mb-4 hours">
            <li><p class="text-muted mb-2">Mon-Fri 11am - 9pm</p></li>
            <li><p class="text-muted mb-2">Sat         11am - 9pm</p></li>
            <li><p class="text-muted mb-2">Sun        11am - 9pm</p></li>
          </ul>
          <h6 class="text-uppercase font-weight-bold mb-4">Location</h6>
          <ul class="list-unstyled mb-0 location">
            <li>
              <a href="https://www.google.com/maps/place/8121+Greenback+Ln,+Fair+Oaks,+CA+95628" target="_blank">
                8121 Greenback Ln
                Fair Oaks, CA 95628
              </a>
            </li>
          </ul>
          </div>
          <div class="col-lg-4 col-md-6 mb-lg-0">
            <h6 class="text-uppercase font-weight-bold mb-4">Sign up for offers and other news!</h6>
            <p class="text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>
            <div class="p-1 rounded border">
              <div class="input-group">
                <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1" class="form-control border-0 shadow-0"/>
                <div class="input-group-append">
                  <button id="button-addon1" type="submit" class="btn btn-link"><i class="fa fa-paper-plane"></i></button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 mb-4 mb-lg-0 sitemap">
            <h6 class="text-uppercase font-weight-bold mb-4">Sitemap</h6>
            <ul class="list-unstyled mb-0">
              <li class="mb-2"><SignInButton /></li>
              <li class="mb-2"><CareersButton/></li>
              <li class="mb-2"><a href="./about" class="">About</a></li>
              <li class="mb-2"><a href="./menu" class="">Menu</a></li>
              <li class="mb-2"><ReservationButton/></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="bg-white">
        <div class="container text-center">
          <p class="text-muted">© 2022 AsianNCajun2 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer