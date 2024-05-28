import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='geoLocations'>
        <div className='address contactDiv'>
            <div>
                <i class="bi bi-geo-alt add"></i>
            </div>
            <div className='mt-1'>
                <h2>Address</h2>
                <p className='m-0'>A108 Adam Street</p>
                <p className='m-0'>New York, NY 535022 - US</p>
            </div>
        </div>
        <div className='reservation contactDiv'>
            <div>
                <i class="bi bi-telephone phone"></i>
            </div>
            <div className='mt-1'>
                <h2>Reservations</h2>
                <p className='m-0'><span>Phone : </span> +1 5589 55488 55</p>
                <p className='m-0'><span>Email : </span> info@example.com</p>
            </div>
        </div>
        <div className='opening contactDiv'>
            <div>
                <i class="bi bi-clock clk"></i>
            </div>
            <div className='mt-1'>
                <h2>Opening Hours</h2>
                <p className='m-0'><span>Mon-Sat : </span> 11AM - 23PM</p>
                <p className='m-0'><span>Sunday : </span> Closed</p>
            </div>
        </div>
        <div className='followUs'>
            <h2>Follow Us</h2>
            <div className='d-flex gap-3 mt-3'>
                <div className='socialMedia'>
                    <i class="bi bi-twitter"></i>
                </div>
                <div className='socialMedia'>
                    <i class="bi bi-facebook"></i>
                </div>
                <div className='socialMedia'>
                    <i class="bi bi-instagram"></i>
                </div>
                <div className='socialMedia'>
                    <i class="bi bi-linkedin"></i>
                </div>
            </div>
        </div>
      </div>

      <hr className='mt-5'/>

      <div className='copyrightSection text-center mt-4'>
        <p> &#169; Copyright Yummy. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer;
