import { createSlice } from "@reduxjs/toolkit";
// const createSlice = require('@reduxjs/toolkit').createSlice
const initialState = {
    numOfCake:10
}
//below function accepts object has an argument
const cakeSice = createSlice({
    name:'cake',
    initialState,
    reducers : {
        // here reducers of function apperas
        ordered: (state,action) => {
            state.numOfCake--
        },
        restocked: (state,action) => {
            state.numOfCake += action.payload
        }
    }
})  
export default cakeSice