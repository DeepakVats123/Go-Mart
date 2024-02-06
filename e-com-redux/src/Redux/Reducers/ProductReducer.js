const iniitialData = {
    products : [],
    cartProducts : []
}
export const ProductReducer = (storeData = iniitialData ,action) =>{
    switch(action.type){
        case "GET DATA" : {
            return {
                ...storeData,
                products : action.payload
            }
        }
        case "ADD TO CART" : {
            const existingItem = storeData.cartProducts.find((item) => item.id === action.payload.id)
            if(existingItem){
                const updatedCartItems = storeData.cartProducts.map((e) => {
                    return e.id === action.payload.id ? {...e, quantity : e.quantity + 1 }: e
                })
                return {
                    ...storeData,
                    cartProducts : updatedCartItems
                }
            }else{
                return {
                    ...storeData,
                    cartProducts : [...storeData.cartProducts, action.payload]
                }
            }
        }
        case "DELETE FROM CART" : {
            return {
                ...storeData,
                cartProducts : action.payload
            }
        }

        case "INCREASE CART ITEM" : {
            const updatedQty = storeData.cartProducts.map((e)=>{
                if(e.id === action.payload.id){
                    return action.payload
                }
                else{
                    return e
                }
            })
            return {
                ...storeData,
                cartProducts : updatedQty
            }
        }

        case "DECREASE CART ITEM" : {
            const updatedDecQty = storeData.cartProducts.map((e)=>{
                if(e.id === action.payload.id){
                    return action.payload
                }
                else{
                    return e
                }
            }
            )
            return {
                ...storeData,
                cartProducts : updatedDecQty
            }
        }
        default : {
           return storeData  
        }
    }
    
}