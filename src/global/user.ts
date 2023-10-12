import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserState {
  Name: string;
  Class: number;
  Email: string;
  ImageUrl: string;
  ImageHash: string;
}

const initialState: UserState = {
  Name: "",
  Class: 0,
  Email: "",
  ImageUrl: "",
  ImageHash: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<UserState>) => {
      return {
        ...action.payload,
      };
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
