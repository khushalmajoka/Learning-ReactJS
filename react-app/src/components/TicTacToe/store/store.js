import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './gameSlice';

const store = configureStore({
  reducer: {
    tictactoe: gameReducer,
  },
});

export default store;
