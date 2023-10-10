import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserState {
  Name: string;
  Class: number;
  ImageUrl: string;
  ImageHash: string;
  Token: string;
  RefreshToken: string;
}

const initialState: UserState = {
  Name: "",
  Class: 0,
  ImageUrl: "",
  ImageHash: "",
  Token: "",
  RefreshToken: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<UserState>) => {
      state = action.payload;
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
