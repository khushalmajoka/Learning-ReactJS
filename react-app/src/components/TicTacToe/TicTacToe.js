import React from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import Scoreboard from "./Scoreboard";
import Playzone from "./Playzone";
import RightPart from "./RightPart";

const TicTacToe = () => {
  return (
    <Provider store={store}>
      <div className="flex bg-[#caf0f8]">
        <Scoreboard />
        <Playzone />
        <RightPart />
      </div>
    </Provider>
  );
};

export default TicTacToe;
