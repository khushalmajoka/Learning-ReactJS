import React from "react";
import { useSelector } from "react-redux";

const RightPart = () => {
  const turn = useSelector((state) => state.tictactoe.turn);
  const winner = useSelector((state) => state.tictactoe.currentGameWinner);
  return (
    <div className="flex-1 text-6xl flex items-center justify-center font-Rowdies">
      <div className="h-1/4 w-2/3 rounded-xl flex flex-col items-center justify-center shadow-scoreboardShadow bg-[#90e0ef]">
        {winner === "" ? (
          <div
            className={`${turn === "X" ? "text-red-600" : "text-blue-600"}`}
          >{`${turn}'s Turn`}</div>
        ) : winner === "Draw" ? (
          <div
            className="text-black"
          >{`${winner}`}</div>
        ) : (
          <div
            className={`${winner === "X" ? "text-red-600" : "text-blue-600"}`}
          >{`${winner} won`}</div>
        )}
      </div>
    </div>
  );
};

export default RightPart;
