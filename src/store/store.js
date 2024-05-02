import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./slice";

const store = configureStore({
  reducer: {
    gameReducer: gameSlice.reducer,
  },
});

export default store;
