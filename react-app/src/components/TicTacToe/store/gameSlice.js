import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boardArray: ["", "", "", "", "", "", "", "", ""],
  turn: "X",
  disableBoard: false,
  currentGameWinner: "",
  xScore: 0,
  oScore: 0,
  history: [],
};

const gameSlice = createSlice({
  name: "tictactoe",
  initialState,
  reducers: {
    setXTurn: (state) => {
      state.turn = "X";
    },
    setOTurn: (state) => {
      state.turn = "O";
    },
    updateBoard: (state, action) => {
      const { index, value } = action.payload;
      state.boardArray[index] = value;
    },
    resetBoard: (state, action) => {
      state.boardArray = ["", "", "", "", "", "", "", "", ""];
    },
    setDisableBoard: (state, action) => {
      state.disableBoard = action.payload;
    },
    setResetClicked: (state, action) => {
      state.resetClicked = action.payload;
    },
    setCurrentGameWinner: (state, action) => {
      state.currentGameWinner = action.payload;
    },
    setXScore: (state) => {
      state.xScore = state.xScore+1
    },
    setOScore: (state) => {
      state.oScore = state.oScore+1
    },
    setHistory: (state, action) => {
      state.history.unshift(action.payload)
    },
  },
});

export const {
  setXTurn,
  setOTurn,
  updateBoard,
  resetBoard,
  setDisableBoard,
  setResetClicked,
  setCurrentGameWinner,
  setXScore,
  setOScore,
  setHistory,
} = gameSlice.actions;
export default gameSlice.reducer;
