import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SettingState {
  tab: number
}

const initialState: SettingState = {
  tab: 0
}

export const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setTab: (state, action: PayloadAction<number>) => {
      state.tab = action.payload
    }
  }
})

export const { setTab } = settingSlice.actions
export default settingSlice.reducer