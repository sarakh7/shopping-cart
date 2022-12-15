import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./entities/cart/cartSlice";
import productSlice from "./entities/products/productSlice";
import uiSlice from "./ui/uiSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        products: productSlice.reducer,
        ui: uiSlice.reducer
    }
})

export default store;