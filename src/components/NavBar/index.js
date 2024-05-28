import React from 'react';
import './nav.css'
import { Link } from 'react-router-dom';

function Index() {
  return (
      <div className='navBar w-100 d-flex justify-content-between align-items-center py-4'>
        <div className='logo'>
          <h1 className='m-0'>Yummy.</h1>
        </div>

        <div className='navLinks d-flex align-items-center w-50 '>
          <ul className='d-flex align-items-center mb-0 w-100 justify-content-between'>
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/about">About</Link>
                </li>

                <li>
                  <Link to="/menu">Menu</Link>
                </li>
                <li>
                  <Link to="/events">Events</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
          </ul>
        </div>

        <div>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </div>
      </div>
  )
}

export default Index;
