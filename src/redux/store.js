import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";
export const increment = createAction("myValue/increment");
export const decrement = createAction("myValue/decrement");

const myReducer = createReducer(0, {
    [increment]: (state, action) => state + action.payload,
    [decrement]: (state, action) => state - action.payload,

})



export const store = configureStore({
    reducer: {
        myValue: myReducer,
    },
})