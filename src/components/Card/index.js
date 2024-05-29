import React from 'react';
import { images } from '../../utils/constants';
import './card.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../stores/actions/cart';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Card(props) {
    const dispatch = useDispatch();
    const img = images[props.index];

    const notify = () => {
        toast("Item Added successfully");
      };
    
    
    const addItemToCart = (id) =>{
        notify()
        dispatch(addToCart(id))
    }



  return (
        <div className='card mt-4 ' id={props.index}>
            <div>
                <img src={img.path} alt='dish' width='75%' />
            </div>
            <div>
                <h3 className='mt-3'>{img.dishName}</h3>
                <p className='mb-1'>Lorem, deren, trataro, filede, nerada</p>
                <div className='d-flex justify-content-between px-5 mt-4'>
                    <h4 className='text-danger mb-0'>${img.price}</h4>
                    <button className='border borders-0 px-3 addItem' onClick={()=>addItemToCart(props.index)}>ADD +</button>
                    <ToastContainer autoClose={700} theme='dark' />
                </div>
            </div>
        </div>
  )
}

export default Card;
