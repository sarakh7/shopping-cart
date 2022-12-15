
import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: "products",
    initialState: {
        products: []
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setIsInCart: (state, action) => {
            const updatedProduct = state.products.find(product => product.id === action.payload.id);
            updatedProduct.isInCart = action.payload.isInCart;
        },
        increaseQuantity: (state, action) => {
            let index = state.products.findIndex(product => product.id === action.payload.id);
            state.products[index].quantity++;
        },
        decreaseQuantity: (state, action) => {
            let index = state.products.findIndex(product => product.id === action.payload);
            state.products[index].quantity--;
        }
    }
})

export const productActions = productSlice.actions;

export default productSlice;
