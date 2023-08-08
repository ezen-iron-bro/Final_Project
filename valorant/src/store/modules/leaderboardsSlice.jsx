import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// localStorage.clear();
export const getLeaderboards = createAsyncThunk("leaderboards/getLeaderboards", async () => {
  const res = await axios.get(
    "https://gist.githubusercontent.com/habi-er/c163ee549a819cc8ca8bf4f52b6c0038/raw/8161b84944bd89d53349e0d6825212c47e794e87/leaderboards.json"
  );
  return res.data;
});
const initialState = localStorage.getItem("leaderboards")
  ? JSON.parse(localStorage.getItem("leaderboards"))
  : {
      leaderboardsData: [],
      currentPage: 1,
      postsPage: 10,
      searchedPlayer: null,
    };
export const leaderboardsSlice = createSlice({
  name: "leaderboards",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setSearchedPlayer(state, action) {
      state.searchedPlayer = action.payload;
      console.log(state.searchedPlayer);
    },
  },
  extraReducers: builder => {
    builder.addCase(getLeaderboards.fulfilled, (state, action) => {
      state.leaderboardsData = action.payload;
    });
  },
});
export const { setCurrentPage, setSearchedPlayer } = leaderboardsSlice.actions;
export default leaderboardsSlice.reducer;
