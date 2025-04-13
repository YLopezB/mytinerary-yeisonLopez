import { configureStore } from "@reduxjs/toolkit";
import {cityReducer} from "./reducers/cityReducer";
import { itineraryReducer } from "./reducers/itineraryReducer";


const store = configureStore({
    reducer : {
        citiesStore : cityReducer,
        itinerariesStore : itineraryReducer
    }
})

export default store