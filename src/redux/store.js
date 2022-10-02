import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";
export const addContact = createAction("myContacts/addContact");
export const deleteContact = createAction("myContacts/deleteContact");

const myReducer = createReducer([], {
    [addContact]: (state, action) => [...state, action.payload],
    [deleteContact]: (state, action) => state.filter(item => item.id !== action.payload),

})



export const store = configureStore({
    reducer: {
        myValue: myReducer,
    },
})