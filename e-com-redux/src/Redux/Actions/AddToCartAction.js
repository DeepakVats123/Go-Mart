import { addToCart } from "./actionTypes";

export const addToCartAction = (data, dispatch) =>{
    
    
    dispatch({
        type : addToCart,
        payload : {...data, quantity : 1}
    })
}