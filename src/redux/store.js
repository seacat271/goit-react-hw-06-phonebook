import { configureStore} from "@reduxjs/toolkit";
import { contactsSlice } from "./contacts/slice";
import { filterSlice } from "./filter/slice";
import { combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['filter'],
  }
const rootReducer = combineReducers({contacts: contactsSlice.reducer, filter: filterSlice.reducer,})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
})

export const persistor = persistStore(store)
