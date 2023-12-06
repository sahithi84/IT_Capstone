// promoCodeSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the state type
interface PromoCodeState {
  promoCode: {};
}

// Initial state
const initialState: PromoCodeState = {
  promoCode: {},
};

const promoCodeSlice = createSlice({
  name: "promoCode",
  initialState,
  reducers: {
    setPromoCode: (state, action: PayloadAction<{}>) => {
      state.promoCode = action.payload;
    },
    clearPromoCode: (state) => {
      state.promoCode = {};
    },
  },
});

export const { setPromoCode, clearPromoCode } = promoCodeSlice.actions;
export default promoCodeSlice.reducer;
