import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../actions/cart";
import { images } from "../../utils/constants";

const initialState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let flag = true;
            const items = [...state.items];
            let updatedItems;
            let addedItem;
            let price = 0;
            for(let i of items){
                let id = i.id-1;
                if(id === action.payload){
                    i['quantity'] = i['quantity']+1;
                    price = i.price;
                    flag = false;
                }
            }
            if(flag){
                addedItem = {...images[action.payload],quantity : 1};
                price = addedItem.price;
                updatedItems = [...state.items, addedItem];
            }
            else{
                updatedItems = [...items];
            }
            const updatedTotalAmount = state.totalAmount + price;
            return {
                ...state,
                items: updatedItems,
                totalAmount: updatedTotalAmount,
            };

        case REMOVE_FROM_CART:
            let removedItemPrice = 0;
            const updatedItemsAfterRemoval = state.items.filter((val)=>{
                let id = val.id-1;
                if(id === action.payload && val.quantity <=1){
                    removedItemPrice = val.price;
                    return false;
                }
                else if(id === action.payload && val.quantity >1){
                    removedItemPrice = val.price;
                    val.quantity = val.quantity - 1;
                }
                return true;
            })
            const updatedTotalAmountAfterRemoval = state.totalAmount - removedItemPrice;
            return {
                ...state,
                items: updatedItemsAfterRemoval,
                totalAmount: updatedTotalAmountAfterRemoval,
            };

        case CLEAR_CART:
            return {
                ...state,
                items: [],
                totalAmount: 0,
            };
        default:
            return state;
    }
};

export default cartReducer;
