import React from 'react';
import './contact.css'
import BookTable from '../BookTable';

function Contact() {
  return (
    <div className='contact row justify-content-center g-0'>
      <div className='leftImg col-4 p-0'>
        <img src='/images/reservation.jpg' width='100%' />
      </div>
      <div className='rightForm col-7 py-5 px-4'>
        <BookTable />
      </div>
    </div>
  )
}

export default Contact;
