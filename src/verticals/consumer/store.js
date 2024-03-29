import { configureStore } from "@reduxjs/toolkit";
import addToCartSlice  from "./AddToCartSlice/Slice";
const store=configureStore({
    reducer:{
        addToCart:addToCartSlice
    }
});
export default store;