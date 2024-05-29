import React from 'react';
import './nav.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Index() {
  // const dispatch = useDispatch();
  // const dispatch = useDispatch()
  // const cart = useSelector((state)=>state.cart.items);
  const cart = useSelector((state)=>state.cart.items);
  const cartLength = cart.length;
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
                  <Link to="/booking">Booking</Link>
                </li>
          </ul>
        </div>

        <div>
          <div>
            <div>
              <Link to="/cart" className='fs-4 text-danger'><i class="bi bi-cart-check-fill text-danger"></i><sup>{cartLength}</sup></Link>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Index;
