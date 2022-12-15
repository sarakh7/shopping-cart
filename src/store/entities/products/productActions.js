// import axios from "axios"
import { productActions } from './productSlice';
import { PRODUCTS } from '../../../helper/products';
import { cartActions } from './../cart/cartSlice';

export const getAllProducts = () => async (dispatch, getState) => {

    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
        dispatch(cartActions.setCart(cart));
    }
    const cartItems = getState().cart.items;

    // try {
    //     const { data, status } = await axios.get("https://fakestoreapi.com/products");
    //     if (status === 200) {
    //         const prodcts = data.map(item => {
    //             let cartItem = cartItems.find(cItem => cItem.id === item.id);
    //             if (cartItem) {
    //                 return { ...item, quantity: cartItem.quantity }
    //             } else {
    //                 return { ...item, quantity: 0 }
    //             }

    //         })
    //         dispatch(productActions.setProducts(prodcts));
    //     }

    // } catch (err) {
    //     console.log(err);
    // }

    const prodcts = PRODUCTS.map(item => {
        let cartItem = cartItems.find(cItem => cItem.id === item.id);
        if (cartItem) {
            return { ...item, quantity: cartItem.quantity }
        } else {
            return { ...item, quantity: 0 }
        }

    })

    dispatch(productActions.setProducts(prodcts));
}