import { getData } from "./actionTypes"

export const getDataFromServer = (data, dispatch)=>{
   
    
 dispatch({
    type : getData,
    payload : data
 })
}