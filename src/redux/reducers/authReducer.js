import { createReducer } from "@reduxjs/toolkit";
import { login, setUser, logout } from "../actions/authActions";

const initialState = {
    user: null, 
    token: null,
    error: null,
    status: 'idle',
}

export const authReducer = createReducer(initialState, (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token
        state.status = 'succeded'
    })
    .addCase(login.pending, (state) => {
        state.status= 'pending'
        state.error = null
        state.user= null
    })
    .addCase(login.rejected, (state, action) => {
        state.status ='failed'
        state.error = action.payload
        state.user = null
        state.token = null
    })
    .addCase(setUser, (state, action) => {
        state.user = action.payload.user.response
        state.token = action.payload.token
    })
    .addCase(logout.fulfilled, (state, action) => {
        state.user = null
        state.token = null
        state.error = null
        state.status = 'idle'
    })
})
