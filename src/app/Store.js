import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../app/CartSlice"
const Store=configureStore( {
        reducer:{
            cart:CartSlice,
        }
    }
)
export default Store;