import React from 'react'
import logo from './img/logo.jpg';
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
            <p class="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
            <ul class="list-inline social-links">
              <li class="list-inline-item"><a href="#" target="_blank" title="twitter"><i class="fa fa-twitter social"></i></a></li>
              <li class="list-inline-item"><a href="#" target="_blank" title="facebook"><i class="fa fa-facebook social"></i></a></li>
              <li class="list-inline-item"><a href="#" target="_blank" title="instagram"><i class="fa fa-instagram social"></i></a></li>
              <li class="list-inline-item"><a href="#" target="_blank" title="pinterest"><i class="fa fa-pinterest social"></i></a></li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-6 mb-4 mb-lg-0"></div>
          <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 class="text-uppercase font-weight-bold mb-4"></h6>
            <ul class="list-unstyled mb-0">
              <li class="mb-2"><a href="#" class="text-muted">Login</a></li>
              <li class="mb-2"><CareersButton/></li>
              <li class="mb-2"><a href="#" class="text-muted">About</a></li>
              <li class="mb-2"><a href="#" class="text-muted">Menu</a></li>
              <li class="mb-2"><a href="#" class="text-muted">Reservations</a></li>
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
        </div>
      </div>

      <div class="bg-white">
        <div class="container text-center">
          <p class="text-muted">© 2019 Bootstrapious All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer