import {configureStore} from "@reduxjs/toolkit";
import allProductsSlice from "./slicers/allProductsSlice";


export default configureStore({
    reducer:{
        allProducts: allProductsSlice,
    }
})