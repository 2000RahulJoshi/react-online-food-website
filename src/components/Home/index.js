import React from 'react';
import './section.css';
import HomeBody from '../HomeBody';
import Banner from '../Banner/banner';
import Chef from '../Chefs';
import Gallery from '../Gallery';

function Home() {
  return (
    <div className='home'>
      <Banner />
      <HomeBody />
      <Chef />
      <Gallery />
    </div>  
  )
}

export default Home;
