import React from 'react';
import './about.css'

function About() {
  return (
    <div className='aboutUs'>
      <div className='text-center'>
        <p className='m-0'>About Us</p>
        <h1>Learn More About Us</h1>
      </div>

      <div className='aboutInfo d-flex justify-content-between mt-5'>
        <div className='aboutLeft'>
            <img src='./images/about.jpg' alt='about img' width='100%' height='100%' />
        </div>

        <div className='aboutRight'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</p>
            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
            <div>
                <img src='./images/aboutTwo.jpg' alt='about img' width='100%' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default About;
