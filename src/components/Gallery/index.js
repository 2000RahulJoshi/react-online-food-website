import React from 'react';
import { galleryImg } from '../../utils/constants';
import Slider from "react-slick";

function Gallery() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay: true,    
        autoplaySpeed: 2000,       
      };
  return (
    <div className='mt-5'>
        <div className='text-center'>
            <p className='colorGrey m-0'>GALLERY</p>
            <h1>Check Our Gallery</h1>
        </div>
        <div className='mt-5'>
        <Slider {...settings}>
            {
                galleryImg.map((img,index)=>{
                    const path = img;
                    const alternative = path + index;
                    return (
                        <div className='d-flex flex-column align-items-center'>
                            <img src={path} alt={alternative} width='160px' height='160px' />
                        </div>
                    )
                })
            }
        </Slider>    
        </div>        
    </div>
  )
}

export default Gallery;



