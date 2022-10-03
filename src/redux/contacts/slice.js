import { createSlice } from "@reduxjs/toolkit";
import { data } from "data";

export const contactsSlice = createSlice({
    name: "contacts",
    initialState: data,
    reducers: {
        addContact(state, action) {
            return [...state, action.payload]
        },
        deleteContact(state, action) {
            return state.filter(contact => contact.id !== action.payload)
        },
    },
})
export const {addContact, deleteContact} = contactsSlice.actions