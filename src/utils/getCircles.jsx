import { v4 as uuidv4 } from "uuid";
import { Circle } from "../components/Circle";

export const getCircles = (amount, style) => {
  const arr = Array(Number(amount))
    .fill()
    .map(() => {
      const id = uuidv4();
      return <Circle key={id} style={style} />;
    });
  return arr;
};
