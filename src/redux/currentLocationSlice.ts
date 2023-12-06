// currentLocation.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the state type
interface CurrentLocationSlice {
  currentLocation: {};
}

// Initial state
const initialState: CurrentLocationSlice = {
  currentLocation: {},
};

const currentLocationSlice = createSlice({
  name: "currentLocation",
  initialState,
  reducers: {
    setCurrentLocation: (state, action: PayloadAction<{}>) => {
      state.currentLocation = action.payload;
    },
    clearCurrentLocation: (state) => {
      state.currentLocation = {};
    },
  },
});

export const { setCurrentLocation, clearCurrentLocation } =
  currentLocationSlice.actions;
export default currentLocationSlice.reducer;
