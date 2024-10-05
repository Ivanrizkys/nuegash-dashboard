import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export enum ThemeAppEnum {
  LIGHT = "LIGHT",
  DARK = "DARK",
}

export interface AppState {
  theme: ThemeAppEnum;
  screenWidth: number;
  showSidebar: boolean;
}

const initialState: AppState = {
  theme: ThemeAppEnum.LIGHT,
  screenWidth: 0,
  showSidebar: true,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateThemeApp: (state, action: PayloadAction<ThemeAppEnum>) => {
      state.theme = action.payload;
    },
    updateScreenWidth: (state, action: PayloadAction<number>) => {
      state.screenWidth = action.payload;
    },
    updateShowSidebar: (state, action: PayloadAction<boolean>) => {
      state.showSidebar = action.payload;
    },
  },
});

export const { updateThemeApp, updateScreenWidth, updateShowSidebar } =
  appSlice.actions;
export default appSlice.reducer;
