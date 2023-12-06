// constantsSlice.ts

import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Define the state type
interface MapState {
  constants: {};
}

// Initial state
const initialState: MapState = {
  constants: {},
};

const constantsSlice = createSlice({
  name: 'constants',
  initialState,
  reducers: {
    setConstants: (state, action: PayloadAction<{}>) => {
      state.constants = action.payload;
    },
    clearConstants: state => {
      state.constants = {};
    },
  },
});

export const {setConstants, clearConstants} = constantsSlice.actions;
export default constantsSlice.reducer;
