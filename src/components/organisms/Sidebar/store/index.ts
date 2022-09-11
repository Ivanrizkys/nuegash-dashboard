import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SidebarState {
  value: number
}

const initialState: SidebarState = {
  value: 0
}

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    updateSidebar: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    }
  }
})

export const { updateSidebar } = sidebarSlice.actions
export default sidebarSlice.reducer