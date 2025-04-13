import { createReducer } from "@reduxjs/toolkit";
import { getItineraryById } from "../actions/itineraryActions";

const initialState = {
    itineraries: [],
    loading : true,
    error : null,
}

export const itineraryReducer = createReducer(initialState, (builder) => {
    builder.addCase(getItineraryById.fulfilled, (state, action) => {
        state.itineraries = action.payload
        state.loading = false
    })
    .addCase(getItineraryById.pending, (state) => {
        state.loading = true
    })
    .addCase(getItineraryById.rejected, (state, action) => {
        state.loading = true
        state.error = action.error
    })
})