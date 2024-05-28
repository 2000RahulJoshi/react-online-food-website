import React from 'react';
import './section.css';
import HomeBody from '../HomeBody/homeBody';
import Banner from '../Banner/banner';

function Home() {
  return (
    <div className='home'>
      <Banner />
      <HomeBody />
    </div>  
  )
}

export default Home;
