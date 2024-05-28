export const ADD_TO_CART =  'ADD_TO_CART';
export const REMOVE_FROM_CART =  'REMOVE_FROM_CART';
export const CLEAR_CART =  'CLEART_CART';
export const CALCULATE_PRICE = 'TOTAL_PRICE';

export const addToCart = (id) =>({
    type : ADD_TO_CART,
    payload : id,
})

export const removeFromCart = (id) =>({
    type : REMOVE_FROM_CART,
    payload : id,
})

export const clearCart = () =>({
    type : clearCart,
})
