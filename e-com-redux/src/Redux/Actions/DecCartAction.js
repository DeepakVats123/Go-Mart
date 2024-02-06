import { decreaseCartItem } from "./actionTypes";

export const DecCartAction = (data, dispatch) => {
    const newData = {...data, quantity : data.quantity - 1}
        return dispatch({
            type : decreaseCartItem,
            payload : newData
        })
}