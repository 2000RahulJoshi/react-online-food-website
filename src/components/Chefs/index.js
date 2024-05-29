import React from 'react';
import { chefs } from '../../utils/constants';

function Chef() {
  return (
    <>
        <div className='row d-flex mt-4 chefContainer justify-content-between py-4 px-3'>
                <div className='text-center'>
                    <p className='m-0 colorGrey'>CHEFS</p>
                    <h1 className='m-0'>Our Proffesional Chefs</h1>
                </div>
                {
                    chefs.map( (img,index)=> {
                        const path = img.path;
                        const fullName = img.fullName;
                        const role = img.role;
                        const desc = img.desc;
                        return(
                            <div className='chefImg mt-5 g-0'>
                                <div className='mb-4'>
                                    <img src={path} width='100%' alt={"galleryImg"+index}/>
                                </div>
                                <div className='text-center px-2'>
                                    <h2>{fullName}</h2>
                                    <p className='colorGrey'>{role}</p>
                                    <p className='colorGrey'>{desc}</p>
                                </div>
                            </div>
                        )
                    })
                }
        </div>
        <hr />
    </>    
  )
}

export default Chef;
