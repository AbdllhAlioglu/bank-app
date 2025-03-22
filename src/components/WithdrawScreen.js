import React, { useState } from "react";

export default function WithdrawScreen({ user, dispatch }) {
  const [amount, setAmount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleAccountPage = () => {
    dispatch({ type: "startApp" });
  };

  const handleWithdraw = () => {
    const withdrawAmount = parseFloat(amount);
    setErrorMessage("");

    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
      setErrorMessage("Lütfen geçerli bir miktar giriniz.");
      return;
    }

    if (withdrawAmount > user.bakiye) {
      setErrorMessage("Bakiyenizden fazla para çekemezsiniz.");
      return;
    }

    dispatch({ type: "updateBalance", payload: -withdrawAmount });

    dispatch({
      type: "addTransaction",
      payload: {
        type: "Para Çekme",
        amount: withdrawAmount,
        date: new Date().toLocaleString(),
      },
    });

    setAmount("");
    dispatch({ type: "startApp" });
  };

  return (
    <div className="withdraw-screen">
      <h2>Para Çekme</h2>
      <p>
        Mevcut Bakiyeniz: <strong>{user.bakiye} ₺</strong>
      </p>

      <div className="form-group">
        <label className="form-label">Çekmek istediğiniz tutarı giriniz:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Çekilecek Tutar"
        />
      </div>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <button className="btn" onClick={handleWithdraw}>
        Para Çek
      </button>
      <button className="btn btn-outline" onClick={handleAccountPage}>
        Geri Dön
      </button>
    </div>
  );
}
