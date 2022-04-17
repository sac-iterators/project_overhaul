import React from 'react'
import Footer from './Footer';
import Navigation from './Navigation';
import './Home.css';

function About() {
    return (
        <div className="about">
            <Navigation />
            <div className="top-section">
                <div className='panel'>
                        <h2>About</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At consectetur lorem donec massa sapien. Euismod lacinia at quis risus sed vulputate odio ut.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At consectetur lorem donec massa sapien. Euismod lacinia at quis risus sed vulputate odio ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At consectetur lorem donec massa sapien. Euismod lacinia at quis risus sed vulputate odio ut.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At consectetur lorem donec massa sapien. Euismod lacinia at quis risus sed vulputate odio ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At consectetur lorem donec massa sapien. Euismod lacinia at quis risus sed vulputate odio ut.</p>
                </div>
            </div>
            <Footer/>          
        </div>
    )
}

export default About

