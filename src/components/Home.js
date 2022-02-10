import React from "react";
import { Route, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Slider from "./Slider";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import Locales from "./LocationShowcase/Locales";

function Home() {
  return (
    <div>
      <div className='py-3' style={{ backgroundColor: 'lightgray' }}>
        <h3 >Take Classes From Anywhere</h3>
        <div className='links-container'>
          <Link className='links' to='/login'>Login</Link>
          <Link className='links' to='/register'>Register</Link>
        </div>
      </div>
      <div className='section-one'>
        <div className='first-content'>
          <Slider />
        </div>
        <div className='first-content'>
          <h1>Our Goal</h1>
          <p>We aspire for you to be the best version of yourself. To build a fitness routine that fits around your schedule and how YOU want to do it. We understand your lifestyle can be hard to work around, thats why we made it easy for you to get a solid workout in, wherever you go. We also have a varierty of different classes that push you to your limits. Our schedules are very flexible as we have many trainers that fit in all hours of the day. So what are you waiting for? Come join a community and implement a variety of workouts into your lifestyle.  </p>
        </div>
        <div className='hero-image'>
        </div>
        <div className='w-100'>
          <div className='text-white bg-dark py-4'>
            <h2>World Class Locations in World Class Cities</h2>
            <p className='mb-0'>We have a range of top quality gyms across the nation's top cities and are constantly expanding.</p>
          </div>
          <Locales></Locales>
        </div>
        <footer>
          <div>
            <h3>Connect With Us On Our Socials</h3>
            <nav className="social">
              <i className="fab fa-instagram"></i>
              <i className="fab fa-facebook-square"></i>
              <i className="fab fa-twitter-square"></i>
            </nav>
          </div>
          <div>
            <nav className="main">
              <a href="#top">Home</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
          <div className="copyright">
            <p>Copyright 2020</p>
          </div>
        </footer>
      </div>
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
    </div>
  );
}
export default Home;
