import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './cart.css';
import { addToCart } from '../../stores/actions/cart';
import { removeFromCart } from '../../stores/actions/cart';

const Cart = ()=> {
  const dispatch = useDispatch();
  const cart = useSelector((state)=>state.cart.items);
  const { totalAmount } = useSelector((state)=>state.cart)

  const addItemToCart = (id) =>{
    dispatch(addToCart(id))
  }

  const removeItem = (id) =>{
    dispatch(removeFromCart(id))
  }

  return (
    totalAmount === 0 ? <>
      <div className='cartItems d-flex flex-column gap-3 justify-content-center w-50 m-auto'>

      </div>
    </> :
    <>
      <div className='cartItems d-flex flex-column gap-3 justify-content-center w-50 m-auto'>
        { 
          cart.map( (items)=>{
            const itemCount = items.quantity;
            const itemPrice = (items.price*itemCount).toFixed(2);
            return(
              <>
                <div className='d-flex gap-5 align-items-center justify-content-between'>
                  <div className='leftDiv d-flex align-items-center justify-content-center flex-column'>
                    <img src={items.path} width='80%' />
                  </div>
                  <div className='rightDiv'>
                    <h4>{items.dishName}</h4>
                    <div className='d-flex align-items-center gap-5 '>
                      <div className='d-flex gap-2 border border-dark border-1 align-items-center'>
                        <button onClick={()=>addItemToCart(items.id-1)} className='border border-0 fs-5 text-danger'>+</button>
                        <p className='mb-0 text-success'>{itemCount}</p>
                        <button onClick={()=>removeItem(items.id-1)} className='border border-0 fs-5 text-success'>-</button>
                      </div>
                      <div>
                        <p className='mb-0'>To pay = ${itemPrice}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </>  
            )
          })
        }
      </div>
      <div>Total = {totalAmount}</div>
    </>  
  )
}

export default Cart;
