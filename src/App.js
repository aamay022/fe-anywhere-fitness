import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About'
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import Logout from './components/Logout';
import ClassList from './components/ClassList';
import ClassForm from './components/AddClassForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Nav, NavItem } from 'reactstrap';





function App() {
  const [classList, setClassList] = useState([])

  useEffect(() => {
    axios.get('http://anytimefitness.herokuapp.com/api/classes')
      .then(res => {
        setClassList([
          ...classList,
          res.data
        ]);
      })
      .catch(err => {
        console.error(err);
      })
  }, )
  return (

    <Router>

      <div className="App">
        <header style={{ backgroundColor: 'lightgray' }}>
          <h1 className='py-3'>
            <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>
              Anywhere Fitness
            </Link>
          </h1>
          <Nav pills className="navBar bg-dark d-flex justify-content-center">
            <NavItem>
              <Link href="#" className='item' to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link href='#' className='item' to='/classlist'>Classes</Link>
            </NavItem>
            <NavItem>
              <Link href='#' className='item' to='/about'>About</Link>
            </NavItem>
            <NavItem>
              <Link href='#' className='item' to='/logout'>Logout</Link>
            </NavItem>
          </Nav>

        </header>

        <Switch>
          <PrivateRoute path='/add-class' component={ClassForm} />
          <PrivateRoute path='/classlist' component={ClassList} />
          <PrivateRoute path='/logout' component={Logout} />
          <Route path='/about' component={About} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </Router >
  );
}

export default App;
