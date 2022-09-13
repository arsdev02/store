import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {API, GET_ALL_PRODUCTS} from "../../config";

export const getAllProducts = createAsyncThunk(
'Products/getAllProdustc',
async()=>{

    }
)

const allProductsSlice = createSlice({
    name:'Products',
    initialState: {
        getAllProducts:[],
    },
    reducers: {

    }
})

export default allProductsSlice.reducer