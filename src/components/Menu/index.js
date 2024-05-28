import React from 'react';
import Card from '../Card';
import { images } from '../../utils/constants';


function Menu() {
  return (
    <div className='menu text-center'>
      <p className='mb-0'>OUR MENU</p>
      <h1>Check Our Yummy Menu</h1>
      <div className='row justify-content-between gap-3'>
        {
            images.map((img,index)=>{
                return(
                    <Card key={img.id} index={index} />
                )
            })
        }
      </div>
    </div>
  )
}

export default Menu;
