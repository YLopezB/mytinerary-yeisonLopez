import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../../data/url";
import axios from "axios";

const changeSearch = createAction("city/changeSearch")

const getCities = createAsyncThunk("city/getCities", async()=>{
    const response = await axios.get(API_URL + "/cities/allCities")
    return response.data.response
})

const getCityById = createAsyncThunk("city/getCityById", async(id) => {
    const response = await axios.get(API_URL + `/cities/id/${id}`)
    return response.data.response
})

export { getCities, changeSearch, getCityById }