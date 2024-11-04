import React, { useState } from "react";

export default function Deposit({ user, dispatch }) {
  const handleAccountPage = () => {
    dispatch({ type: "startApp" });
  };

  const [amount, setAmount] = useState("");

  const handleDeposit = () => {
    const depositAmount = parseFloat(amount);
    if (isNaN(depositAmount) || depositAmount <= 0) {
      alert("Lütfen geçerli bir tutar girin.");
      return;
    }

    dispatch({ type: "updateBalance", payload: depositAmount });

    dispatch({
      type: "addTransaction",
      payload: {
        type: "Para Yatırma",
        amount: depositAmount,
        date: new Date().toLocaleString(),
      },
    });
    setAmount("");
  };

  return (
    <div className="deposit-screen">
      <h2>{user.userName} Para Yatırma</h2>
      <p>Bakiye: {user.bakiye} TL</p>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Yatırılacak Tutar"
      />
      <button className="btn" onClick={handleDeposit}>
        Yatır
      </button>
      <button className="btn" onClick={handleAccountPage}>
        Geri
      </button>
    </div>
  );
}
