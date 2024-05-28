import React from 'react';
import { images } from '../../utils/constants';
import './banner.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Banner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };

  return (
    <div className='banner mb-5'>
    <Slider {...settings}>
      {
        images.map( (img)=>{
          const path = img.path;
          const dish = img.dishName;
          return(
            <div className='bannerImg d-flex flex-column align-items-center'>
              <img src={path} width='120px' height='120px' alt={dish} />
              <p className='mt-2 dishes'>{dish}</p>
            </div>
          )
        })
      }
    </Slider>  
    <hr/>
    </div>
  )
}

export default Banner;
