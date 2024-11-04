import React from "react";

export default function TransactionHistory({ transactionHistory, dispatch }) {
  const handleAccountPage = () => {
    dispatch({ type: "startApp" });
  };

  if (!transactionHistory.length) {
    return (
      <div className="transaction-history">
        <p className="no-transactions">Henüz işlem geçmişi yok.</p>
        <button className="btn" onClick={handleAccountPage}>
          Geri
        </button>
      </div>
    );
  }

  return (
    <div className="transaction-history">
      <h2>İşlem Geçmişi</h2>
      <ul className="transaction-list">
        {transactionHistory.map((transaction, index) => (
          <li key={index} className="transaction-item">
            <span className="transaction-date">{transaction.date}</span> -{" "}
            <span className="transaction-type">{transaction.type}</span>:{" "}
            <span className="transaction-amount">{transaction.amount} TL</span>
          </li>
        ))}
      </ul>
      <button className="btn" onClick={handleAccountPage}>
        Geri
      </button>
    </div>
  );
}
