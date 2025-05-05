import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk('auth/register', async ({ name, lastName, email, password, photo, country, role}, {rejectWithValue}) => {
    try {
        const user = {name, lastName, email, password, photo, country, role}
        console.log(user);
        const response = await axios.post('http://localhost:8080/api/users/create', user)
        return response.data
    } catch (error) {
        if (error.response) 
            return rejectWithValue(error.response.data.message);
        return rejectWithValue('Registration failed');
    }
})

export const login = createAsyncThunk('auth/login', async ({ email, password }, { rejectWithValue }) => {
    try {
        const user = { email, password };
        const response = await axios.post('http://localhost:8080/api/auth/signIn', user);
        localStorage.setItem('token', response.data.token)
        return response.data;
    } catch (error) {
        if (error.response) 
            return rejectWithValue(error.response.data.message);
        return rejectWithValue('Failed to sign in');
    }
})

export const logout = createAsyncThunk('auth/logout', async (token, {rejectWithValue}) =>{
    try {
        const response = await axios.get('http://localhost:8080/api/auth/signUp', {
            headers: {
                Authorization: `Bearer ${token}` ,
            }
        })
        localStorage.removeItem('token')
        return response.data
    } catch (error) {
        if (error.response) 
            return rejectWithValue(error.response.data.message);
        return rejectWithValue('Failed to sign out');
    }
})


export const setUser = createAction('auth/setUser');
