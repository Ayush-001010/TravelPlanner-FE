import { createSlice } from "@reduxjs/toolkit";
import type IUserInterface from "../../../services/Interfaces/UserInterface";

const initialValue: IUserInterface = {
  userName: "Aryan Jha",
  isLoggedIn: true,
};

const UserDetailsSlice = createSlice({
  name: "UserDetails",
  initialState: initialValue,
  reducers: {
    setUserDetailsData: (state, action) => {
      state.userName = action.payload.userName;
    },
  },
});

export default UserDetailsSlice.reducer;
export const { setUserDetailsData } = UserDetailsSlice.actions;
