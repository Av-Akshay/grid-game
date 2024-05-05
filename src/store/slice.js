import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    playerOneCards: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
    ],
    playerTwoCards: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
    ],
    gridArray: [
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
    ],
    playerOneRandomCards: [],
    playerTwoRandomCards: [],
    isPlayerWin: false,
    winnerPlayer: null,
  },
  reducers: {
    removePlayerOneCard: (state, action) => {
      state.playerOneCards.splice(action.payload, 1);
    },
    removePlayerTwoCard: (state, action) => {
      state.playerTwoCards.splice(action.payload, 1);
    },
    addPlayerOneRandomCards: (state, action) => {
      state.playerOneRandomCards.push(action.payload);
    },
    addPlayerTwoRandomCards: (state, action) => {
      state.playerTwoRandomCards.push(action.payload);
    },
    removePlayerOneRandomCards: (state, action) => {
      state.playerOneRandomCards.splice(action.payload, 1);
    },
    removePlayerTwoRandomCards: (state, action) => {
      state.playerTwoRandomCards.splice(action.payload, 1);
    },
    addValueOnGridArray: (state, action) => {
      if (action.payload.player === "one") {
        state.gridArray[action.payload.row - 1][action.payload.col - 1] = "one";
      } else if (action.payload.player === "two") {
        state.gridArray[action.payload.row - 1][action.payload.col - 1] = "two";
      }
    },
    handelDeclareWinner: (state, action) => {
      state.isPlayerWin = true;
      state.winnerPlayer = action.payload;
    },
    resetValue: (state, action) => {
      state.isPlayerWin = false;
      state.winnerPlayer = null;
    },
  },
});
export default gameSlice;
export const {
  removePlayerOneCard,
  removePlayerTwoCard,
  addPlayerOneRandomCards,
  addPlayerTwoRandomCards,
  removePlayerOneRandomCards,
  removePlayerTwoRandomCards,
  addValueOnGridArray,
  handelDeclareWinner,
  resetValue,
} = gameSlice.actions;
