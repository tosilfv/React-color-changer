import { useEffect, useState } from "react";
import { CircleForm } from "./components/CircleForm";
import { getCircles } from "./utils/getCircles";
import "./App.css";

const style = {
  circle: {
    borderRadius: "50px",
    height: "100px",
    margin: "4px",
    width: "100px",
  },
  circles: {
    display: "flex",
    flexWrap: "wrap",
  },
  form: {
    alignItems: "center",
    color: "silver",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Mansalva",
    fontSize: "50px",
    justifyContent: "center",
  },
  text: {
    boxShadow: "0 0 30px 0 silver",
    color: "silver",
    fontFamily: "Mansalva",
    fontSize: "50px",
    margin: "50px",
    textAlign: "center",
    width: "100px",
  },
};

function App() {
  const [amount, setAmount] = useState({ amount: 77 });
  const [circles, setCircles] = useState(getCircles(amount.amount, style));

  useEffect(() => {
    setCircles(getCircles(amount.amount, style));
  }, [amount]);

  const handleAmountChange = (identifier, value) => {
    setAmount(() => ({
      [identifier]: value,
    }));
  };

  return (
    <>
      <CircleForm
        style={style}
        amount={amount}
        handleAmountChange={handleAmountChange}
      />
      <div style={style.circles}>{circles}</div>
    </>
  );
}

export default App;
