import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

export const fetchData = createAsyncThunk("fetchData", async (tag) => {  
    const {data} = await axios.get(tag ? `${url}&tag=${tag}`  : url);
    const imageSource = data.data.images.downsized_large.url;
     return imageSource;    
});

const gif = createSlice({
  name: "gif",
  initialState:{
    isLodding: false,
     data: null,
    isError: false,
  },
  
  extraReducers: (builder) => {
    builder.addCase("fetchData/pending", (state) => {
      state.isLodding = true;
    });
    builder.addCase("fetchData/fulfilled", (state, action) => {
      state.isLodding = false;
      state.data = action.payload;
    });
    builder.addCase("fetchData/rejected", (state) => {
      state.isLodding = false;
      state.isError = true;
    });
  }
  
});

export default gif.reducer;