// tripSlice.js

import { createSlice } from "@reduxjs/toolkit";

const tripSlice = createSlice({
  name: "trip",
  initialState: null,
  reducers: {
    setTrip: (state, action) => {
      return action.payload;
    },
    clearTrip: (state) => {
      return null;
    },
  },
});

export const { setTrip, clearTrip } = tripSlice.actions;
export default tripSlice.reducer;
