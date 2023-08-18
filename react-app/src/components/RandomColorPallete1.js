import React from "react";
import colorGenerator from "../utility/colorGenerator";

const ColorComponent = () => {
  const color = colorGenerator();
  return (
    <div
      style={{
        background: `${color}`,
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
        justifyContent: "center",
        width: "100vw",
      }}
    >
      <h1>#{color}</h1>
    </div>
  );
};

const RandomColorPallete1 = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: '100vh'
    }}>
      <ColorComponent/>
      <ColorComponent/>
      <ColorComponent/>
      <ColorComponent/>
      <ColorComponent/>
      <ColorComponent/>
    </div>
  );
};

export default RandomColorPallete1;