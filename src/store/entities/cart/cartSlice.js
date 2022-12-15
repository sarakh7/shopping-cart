import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        total: 0,
        totalPrice: 0
    },
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
                state.total++;
                state.totalPrice += newItem.price;
            } else {
                state.items.push({
                    ...newItem,
                    quantity: 1,
                    totalPrice: newItem.price
                });
                state.total++;
                state.totalPrice += newItem.price;
            }
        },
        setCart: (state, action) => {
            state.items = action.payload.items;
            state.total = action.payload.total;
            state.totalPrice = action.payload.totalPrice;
        },
        removeFromCart: (state, action) => {
            const removedItemId = action.payload;
            const existingItem = state.items.find(item => item.id === removedItemId);
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== removedItemId);
                state.total--;
                state.totalPrice -= existingItem.price;
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
                state.total--;
                state.totalPrice -= existingItem.price;
            }
        },

    },
})

export const cartActions = cartSlice.actions;

export default cartSlice;