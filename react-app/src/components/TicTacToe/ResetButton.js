import React from "react";
import { resetBoard, setCurrentGameWinner, setDisableBoard, setXTurn } from "./store/gameSlice";
import { useDispatch } from "react-redux";

const ResetButton = () => {
  const handleResetClick = () => {
    dispatch(resetBoard());
    dispatch(setXTurn());
    dispatch(setDisableBoard(false));
    dispatch(setCurrentGameWinner(""))
  };

  const dispatch = useDispatch();
  return (
    <div className="flex-1 flex justify-center items-center">
      <button
        className=" bg-[#03045e] w-32 h-12 text-[#caf0f8] text-2xl rounded-md shadow-scoreboardShadow font-mono"
        onClick={handleResetClick}
      >
        Reset
      </button>
    </div>
  );
};

export default ResetButton;
