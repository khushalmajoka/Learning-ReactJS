import React from "react";
import { useSelector } from "react-redux";

const Scoreboard = () => {
  const xScore = useSelector((state) => state.tictactoe.xScore);
  const oScore = useSelector((state) => state.tictactoe.oScore);
  const history = useSelector((state) => state.tictactoe.history);
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="max-h-[700px] h-2/3 w-2/3 ml-20 rounded-xl flex flex-col items-center shadow-scoreboardShadow bg-[#90e0ef]">
        <h1 className="font-bold text-4xl mt-3 font-Outfit opacity-90">
          Scoreboard
        </h1>
        <div className="h-px bg-black w-3/4 mt-2" />
        <div className="p-2 flex w-full justify-evenly font-BlackOps text-2xl">
          <span className="text-red-600">
            X - {xScore}<div className="w-full h-1 bg-red-600" />
          </span>
          <span className="text-blue-600">
            O - {oScore}<div className="w-full h-1 bg-blue-600" />
          </span>
        </div>
        <div className="m-2 mt-4 first-letter h-2/3 w-full p-2 text-center overflow-auto">
          <ul className="text-lg font-Outfit">
            {history.map((item, index) => {
              return <li key={index}>{item}</li>
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
