import React from 'react';
import Anthony from './Contributor/Anthony';
import Chris from './Contributor/Chris';
import George from './Contributor/George';
import Irvin from './Contributor/Irvin';
import Monica from './Contributor/Monica';
import TraNequa from './Contributor/TraNequa';
import Robert from './Contributor/Robert';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Jumbotron, Nav, NavLink } from 'reactstrap';



const About = () => {


    return (
        <div className='bg-secondary'>
            <Jumbotron className='p-4 bg-dark text-white'>
                <h1>About</h1>
                <p>This site was made by a student team from Lambda Web for a Build week project.
                    Below are the team members and their info.
                </p>
            </Jumbotron>
            <div>
                <Anthony />
                <Chris />
                <George />
                <Irvin />
                <Monica />
                <Robert />
                <TraNequa />
            </div>
            <footer className='d-flex justify-content-between'>
                <div>
                    <h3>Connect with us!</h3>
                </div>
                <Nav vertical>
                    <NavLink href='/home' className='text-white'>Home</NavLink>
                    <NavLink href='/about' className='text-white'>About</NavLink>
                    <NavLink to='#' className='text-white'>Contact</NavLink>
                </Nav>
                <div>
                    <p>Copyright© 2020</p>
                </div>
            </footer>
        </div>
    )

}

export default About