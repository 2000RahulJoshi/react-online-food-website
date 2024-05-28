import React from 'react'

function HomeBody() {
  return (
    <div className='section d-flex justify-content-between align-items-center'>
        <div className='leftSection d-flex flex-column gap-3'>
            <h1>Enjoy Your Healthy Delicious Food</h1>
            <p>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</p>
            <div className='d-flex gap-5 align-items-center'>
                <div>
                    <button className='sectionBtn'>Book a Table</button>
                </div>
                <div className='d-flex gap-2 align-items-center'>
                    <i class="bi bi-play-circle fs-3 text-danger playBtn"></i>
                    <p className='mb-0'>Watch Video</p>
                </div>
            </div>
        </div>
        <div className='rightSection'>
            <img src='./images/dish.png' alt='dish img' className='dishImg' />
        </div>
    </div>
  )
}

export default HomeBody;
