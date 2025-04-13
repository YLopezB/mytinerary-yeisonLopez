import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../../data/url";
import axios from "axios";

const getItineraryById = createAsyncThunk("city/getItineraryById", async(id) => {
    const response = await axios.get(API_URL + `/itineraries/itineraryByCity/${id}`)
    return response.data.response
})

export { getItineraryById }