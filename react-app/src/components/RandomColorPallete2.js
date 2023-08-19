import React from "react";
import colorGenerator from "../utility/colorGeneratorUtility";

const RandomColorPallete2 = () => {

    const colors = [];

    for(let i = 0; i <= 31; i++) {
        let color = colorGenerator();
        colors.push(color);
    }
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "40px",
          color: "#000000",
          margin: "40px",
          fontWeight: "bold",
        }}
      >
        Random Color Generator 2
      </h1>
      <div style={{
        margin: "40px 250px",
      }}>
        <ul style={{
            listStyle: "none",
            display: "flex",
            flexWrap: "wrap"
        }}>
          {colors.map((color) => (
            <li key={color} style={{
                margin: "1px",
                backgroundColor: `${color}`,
                height: "120px",
                width: "120px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "15px",
                fontFamily: "cursive",
                fontWeight: "bold",
            }}>
              {color}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RandomColorPallete2;
