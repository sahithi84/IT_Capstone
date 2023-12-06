// completedTrip.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the state type
interface CompletedTripSlice {
  completedTrip: {};
}

// Initial state
const initialState: CompletedTripSlice = {
  completedTrip: {},
};

const completedTripSlice = createSlice({
  name: "completedTrip",
  initialState,
  reducers: {
    setCompletedTrip: (state, action: PayloadAction<{}>) => {
      state.completedTrip = action.payload;
    },
    clearCompletedTrip: (state) => {
      state.completedTrip = {};
    },
  },
});

export const { setCompletedTrip, clearCompletedTrip } =
  completedTripSlice.actions;
export default completedTripSlice.reducer;
