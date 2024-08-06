import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numOfIceCream : 20
}
const iceCreamSlice = createSlice({
    name : 'iceCream',
    initialState,
    reducers:{
        ordered : (state,action) => {
            state.numOfIceCream--
        },
        restocked : (state,action) => {
            state.numOfIceCream += action.payload
        }
    },
    extraReducers:(builder) => {
        builder.addCase('cake/ordered',  (state) => {
            state.numOfIceCream--
        })
    }
})
export default iceCreamSlice;