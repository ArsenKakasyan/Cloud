import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from "redux-thunk";
import appReducer from './appReducer';
import fileReducer from "./fileReducer";
import uploadReducer from './uploadReducer';
import userReducer from "./userReducer";


const rootReducer = combineReducers({
    user: userReducer,
    files: fileReducer,
    upload: uploadReducer,
    app: appReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    devTools: process.env.NODE_ENV !== 'production',
  });