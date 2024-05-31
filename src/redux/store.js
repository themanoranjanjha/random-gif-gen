import { configureStore } from "@reduxjs/toolkit";
import gifReducer from "./slice/gif"

export const store = configureStore({
  reducer: {
    gif: gifReducer,

    // add reducers
  },
});