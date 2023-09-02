import React, { useEffect, useState } from "react";
import "./Square.css";

const Square = ({ value, onClick, disableBoard, color}) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleButtonClick = () => {
    if (!isDisabled) {
      setIsDisabled(true);
      onClick();
    }
  };

  useEffect(() => {
    if(disableBoard) setIsDisabled(true);
    else setIsDisabled(false);
  }, [disableBoard])

  return (
    <button
      className="w-32 h-32 bg-[#caf0f8] flex items-center justify-center text-6xl font-Gluten"
      onClick={handleButtonClick}
      disabled={isDisabled}
    >
      <span className={color}>{value}</span>
    </button>
  );
};

export default Square;
