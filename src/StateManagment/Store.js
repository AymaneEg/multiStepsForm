import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../StateManagment/UserInfoSlice'


const store = configureStore({
    reducer :{
        user : userReducer,
    }
})

export default store ;