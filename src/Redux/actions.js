import * as types from "./typeActions";

// ADMINS PART START
// ()=>{
// export function addProduct(id, name, description,image, price, quantity=1){
//     return{
//         type : types.ADD_PRODUCT,
//         payload : {id, name, description, image, price,newPrice:0, quantity}}
// }

// export function removeProduct(id){
//     return{
//         type : types.REMOVE_PRODUCT,
//         payload : {id}}
// }

// export function editPrice(id, newPrice){
//     return{
//         type : types.EDIT_PRICE,
//         payload : {id, newPrice}}
// }
// // ADMINS PART END
// }
// ---------------------------------

// USERS PART START
export function addToCart(category ,id){
    return{
        type: types.ADD_TO_CART,
        payload: {category:category, id:id}
    }
}
export function removeFromCart(id){
    return{
        type:types.REMOVE_FROM_CART,
        payload:id
    }
}
export function incrProduct(id){
    return{
        type:types.INCR_PRODUCT,
        payload:id
    }
}
export function decrProduct(id){
    return{
        type:types.DECR_PRODUCT,
        payload:id
    }
}
export function setQnt(id, v){
    return{
        type:types.SETQNT,
        payload:{id:id,v:v}
    }
}
export function emptyCart(){
    return{
        type:types.EMPTY_CART
    }
}
// USERS PART END