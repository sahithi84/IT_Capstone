// userlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the state type
interface MapState {
  user: {};
}

// Initial state
const initialState: MapState = {
  user: [],
};

const mapSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{}>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = [];
    },
  },
});

export const { setUser, clearUser } = mapSlice.actions;
export default mapSlice.reducer;
