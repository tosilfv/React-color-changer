import { useState } from "react";
import { getRandomColor } from "../utils/getRandomColor";

export const Circle = ({ id, style }) => {
  const [color, setColor] = useState("red");
  const handleColor = () => {
    setColor(getRandomColor());
  };
  return (
    <div
      style={{ backgroundColor: color, ...style.circle }}
      key={id}
      onClick={handleColor}
    ></div>
  );
};
