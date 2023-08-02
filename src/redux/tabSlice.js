import { createSlice } from "@reduxjs/toolkit";
// import * as actionTypes from '../actions/type';

const initialState = {
  currentTab: "All Tasks",
};

const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    toggleTab: (state, action) => {
      // console.log(action.payload);
      state.currentTab = action.payload;
    },
  },
});

export const { toggleTab } = tabSlice.actions;

export default tabSlice;
