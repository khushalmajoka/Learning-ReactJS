import React, { useEffect } from "react";
import Square from "./Square";
import { useDispatch, useSelector } from "react-redux";
import {
  setXTurn,
  setOTurn,
  updateBoard,
  setDisableBoard,
  setCurrentGameWinner,
  setXScore,
  setOScore,
  setHistory,
} from "./store/gameSlice";

const Board = () => {
  const boardArray = useSelector((state) => state.tictactoe.boardArray);
  const turn = useSelector((state) => state.tictactoe.turn);
  const disableBoard = useSelector((state) => state.tictactoe.disableBoard);

  const dispatch = useDispatch();

  useEffect(() => {
    const WINNER_CASES = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    let winnerCheck = false;
    for (let i = 0; i < WINNER_CASES.length; i++) {
      const [x, y, z] = WINNER_CASES[i];
      if (
        boardArray[x] !== "" &&
        boardArray[x] === boardArray[y] &&
        boardArray[y] === boardArray[z]
      ) {
        winnerCheck = true;
        dispatch(setDisableBoard(true));
        dispatch(setCurrentGameWinner(boardArray[x]));
        boardArray[x] === "X" ? dispatch(setXScore()) : dispatch(setOScore())
        dispatch(setHistory(boardArray[x]+ " - Won"));
      }
    }
    if (!winnerCheck) {
      let flag = false;
      for (let i = 0; i < 9; i++) {
        if (boardArray[i] === "") {
          flag = true;
          break;
        }
      }
      if (!flag) {
        dispatch(setDisableBoard(true));
        dispatch(setCurrentGameWinner("Draw"));
        dispatch(setHistory("Draw"));
      }
    }
  }, [boardArray]);

  const handleClick = (index) => {
    if (turn === "X") {
      dispatch(updateBoard({ index, value: "X" }));
      dispatch(setOTurn());
    } else {
      dispatch(updateBoard({ index, value: "O" }));
      dispatch(setXTurn());
    }
  };

  return (
    <div className="flex-1 w-full flex items-start justify-center">
      <div className="grid grid-cols-3 gap-1 bg-black">
        {boardArray.map((boardArrayValue, index) => {
          return boardArrayValue === "X" ? (
            <Square
              key={index}
              value={boardArrayValue}
              onClick={() => handleClick(index)}
              disableBoard={disableBoard}
              color={"text-red-600"}
            />
          ) : (
            <Square
              key={index}
              value={boardArrayValue}
              onClick={() => handleClick(index)}
              disableBoard={disableBoard}
              color={"text-blue-600"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Board;
