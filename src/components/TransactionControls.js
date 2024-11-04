import React from "react";

export default function TransactionControls({ user, dispatch }) {
  const handleQuitAccount = () => {
    dispatch({ type: "quitApp" });
  };

  const handleDebtInquiry = () => {
    dispatch({ type: "deptInquiry" });
  };

  const handleTransactionHistory = () => {
    dispatch({ type: "transactionHistory" });
  };

  const handleWithdraw = () => {
    dispatch({ type: "withdrawScreen" });
  };

  const handleDeposit = () => {
    dispatch({ type: "showDeposit" });
  };

  const handleTransfer = () => {
    dispatch({ type: "showTransferScreen" });
  };

  return (
    <div className="transaction-controls">
      <button className="btn" onClick={handleWithdraw}>
        Para Çek
      </button>
      <button className="btn" onClick={handleDeposit}>
        Para Yatır
      </button>
      <button className="btn" onClick={handleTransfer}>
        Para Transferi
      </button>
      <button className="btn" onClick={handleDebtInquiry}>
        Borç Sorgula
      </button>
      <button
        className="btn"
        onClick={() => dispatch({ type: "showLoanApplication" })}
      >
        Kredi Başvuru
      </button>
      <button className="btn" onClick={handleTransactionHistory}>
        İşlem Geçmişi
      </button>
      <button className="btn" onClick={handleQuitAccount}>
        Çıkış
      </button>
    </div>
  );
}
