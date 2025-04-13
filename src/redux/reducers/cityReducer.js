import { createReducer } from "@reduxjs/toolkit";
import { getCities, changeSearch, getCityById } from "../actions/cityActions";

  const initialState = {
    cities : [],
    city : [],
    loading : true,
    error : null,
    search: ""
  }

  export const cityReducer = createReducer(initialState, (builder) => {

  builder.addCase(getCities.fulfilled, (state, action) => {
    state.cities = action.payload
    state.loading = false
  })
  .addCase(getCities.pending, (state) => {
    state.loading = true
  })
  .addCase(getCities.rejected, (state, action) => {
    state.loading = true
    state.error = action.error
  })
  .addCase(changeSearch, (state, action) => {
    state.search = action.payload;
  })

  builder.addCase(getCityById.fulfilled, (state, action) => {
    state.city = action.payload 
    state.loading = false;
  })
  .addCase(getCityById.pending, (state) => {
    state.loading = true
  })
  .addCase(getCityById.rejected, (state, action) => {
    state.loading = true
    state.error = action.error
  })

})

