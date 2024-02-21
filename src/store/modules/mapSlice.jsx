import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  mapData: [],
};

const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setMapData(state, action) {
      state.mapData = action.payload;
    },
  },
});

export const { setMapData } = mapSlice.actions;
export default mapSlice.reducer;
