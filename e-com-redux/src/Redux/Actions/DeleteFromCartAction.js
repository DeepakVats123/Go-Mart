import { deleteCartItem } from "./actionTypes"

export const deleteFromCartAction = (data, dispatch,i)=>{
    data.splice(i, 1)
    const newArr =[...data]
    dispatch({
        type : deleteCartItem,
        payload : newArr
    })
}