import React from "react";
import Board from "./Board";
import ResetButton from "./ResetButton";

const Playzone = () => {
  return (
    <div className="flex flex-1 ml-20 flex-col h-screen">
      <h1 className="flex-1 flex justify-center items-center font-BlackOps text-6xl text-black">
        Tic Tac Toe
      </h1>
      <Board />
      <ResetButton />
    </div>
  );
};

export default Playzone;
