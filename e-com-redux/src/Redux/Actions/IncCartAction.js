import { increaseCartItem } from "./actionTypes";

export const IncCartAction = (data , Dispatch) =>{
    const NewData = {...data, quantity : data.quantity + 1}
    
   Dispatch({
    type : increaseCartItem,
    payload : NewData
   })
}