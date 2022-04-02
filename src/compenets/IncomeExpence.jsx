import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpence = () => {
  const { transactions } = useContext(GlobalContext);
  let income = 0;
  let expence = 0;
  transactions.map((item) => {
    return(  item.amount > 0 ? (income += item.amount) : (expence += item.amount))
   
  });

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${Math.abs(expence)}</p>
      </div>
    </div>
  );
};

export default IncomeExpence;
