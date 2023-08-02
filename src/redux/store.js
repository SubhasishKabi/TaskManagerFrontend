import { configureStore } from "@reduxjs/toolkit";
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

import tabSlice from "./tabSlice";
import taskSlice from "./taskSlice";
// const middleware = [thunk];

const store = configureStore({
  reducer: {
    tasks: taskSlice.reducer,
    currentTab: tabSlice.reducer,
  },
  // middleware,
  // devTools: process.env.NODE_ENV !== 'production' && composeWithDevTools(),
});

export default store;
