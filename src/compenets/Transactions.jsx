import React from "react";

const Transactions = ({ item }) => {
  const sign = item.amount < 0 ? "-" : "+";
  return (
    <>
      <li className={item.amount > 0 ? "plus" : "minus"} >
        {item.text}
        <span>
          {sign}${Math.abs(item.amount)}
        </span>
        <button onClick={()=>deleteButton(item.id)} className="delete-btn">x</button>
      </li>
    </>
  );
};

export default Transactions;
