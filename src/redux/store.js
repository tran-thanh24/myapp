import { configureStore } from "@reduxjs/toolkit";
import { shopingCartSlice } from "./shopingCartSlice/shopingCartSlice";


export const store = configureStore({
    reducer: {
    shopingCart: shopingCartSlice.reducer
}
});