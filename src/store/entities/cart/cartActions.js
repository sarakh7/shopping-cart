import { cartActions } from './cartSlice';
import { productActions } from './../products/productSlice';

export const addItemToCart = product => (dispatch, getState) => {
    if (getState().products.products.length > 0) {
        dispatch(productActions.increaseQuantity(product));
    }
    dispatch(cartActions.addToCart(product));
    localStorage.setItem("cart", JSON.stringify(getState().cart));
}

export const removeItemFromCart = productId => (dispatch, getState) => {
    if (getState().products.products.length > 0) {
        dispatch(productActions.decreaseQuantity(productId));
    }
    dispatch(cartActions.removeFromCart(productId));
    localStorage.setItem("cart", JSON.stringify(getState().cart));
}