export const CircleForm = ({ style, amount, handleAmountChange }) => {
  return (
    <div>
      <form style={style.form}>
        <label htmlFor="amount">Circles</label>
        <input
          style={style.text}
          type="number"
          min="0"
          id="amount"
          name="amount"
          placeholder="Nr."
          onChange={(evt) => handleAmountChange("amount", evt.target.value)}
          value={amount.amount}
        ></input>
      </form>
    </div>
  );
};
