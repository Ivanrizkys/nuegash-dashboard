import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export enum ThemeAppEnum {
  LIGHT = "LIGHT",
  DARK = "DARK",
}

export interface AppState {
  theme: ThemeAppEnum;
}

const initialState: AppState = {
  theme: ThemeAppEnum.LIGHT,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateThemeApp: (state, action: PayloadAction<ThemeAppEnum>) => {
      state.theme = action.payload;
    },
  },
});

export const { updateThemeApp } = appSlice.actions;
export default appSlice.reducer;
