import { configureStore } from "@reduxjs/toolkit";
import {cityReducer} from "./reducers/cityReducer";
import { itineraryReducer } from "./reducers/itineraryReducer";
import { authReducer } from "./reducers/authReducer";


const store = configureStore({
    reducer : {
        citiesStore : cityReducer,
        itinerariesStore : itineraryReducer,
        auth: authReducer
    }
})

export default store