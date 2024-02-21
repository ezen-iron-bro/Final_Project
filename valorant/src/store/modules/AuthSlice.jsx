import { createSlice } from "@reduxjs/toolkit";
// localStorage.clear();

const initialState = localStorage.getItem("valorantUser")
  ? JSON.parse(localStorage.getItem("valorantUser"))
  : {
      users: [],
      currentUser: null,
      authed: false,
      loginFailed: false,
      no: 1,
    };
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup(state, action) {
      const { userId, userPwd } = action.payload;
      state.users = [...state.users, { ...action.payload, id: state.no++ }];
      localStorage.setItem("valorantUser", JSON.stringify(state));
    },
    login(state, action) {
      const { userId, userPwd } = action.payload;
      const user = state.users.find(user => user.userId === userId && user.userPwd === userPwd);
      if (user) {
        state.currentUser = user;
        state.authed = true;
        state.loginFailed = false;
      } else {
        state.loginFailed = true;
      }
      localStorage.setItem("valorantUser", JSON.stringify(state));
    },
    logout(state, action) {
      state.currentUser = [];
      state.authed = false;
      localStorage.setItem("valorantUser", JSON.stringify(state));
    },
  },
  extraReducers: builder => {
    builder;
  },
});
export const { login, logout, signup } = authSlice.actions;
export default authSlice.reducer;
