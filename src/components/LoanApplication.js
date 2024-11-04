import React, { useState } from "react";

export default function LoanApplication({ user, dispatch }) {
  const [loanAmount, setLoanAmount] = useState(0);

  if (!user) {
    return <p>Kullanıcı bilgisi bulunamadı.</p>;
  }

  const handleLoanRequest = () => {
    if (loanAmount > 0) {
      dispatch({
        type: "applyLoan",
        payload: {
          amount: loanAmount,
          date: new Date().toLocaleString(),
        },
      });
      alert("Kredi başvurusu başarıyla yapıldı!");
      setLoanAmount(0); // Input'u sıfırla
    } else {
      alert("Geçerli bir kredi tutarı girin.");
    }
  };

  return (
    <div className="loan-application">
      <h2>{user.userName} Kredi Başvuru Ekranı</h2>
      <p>Mevcut Bakiye: {user.bakiye ?? 0} TL</p>
      <input
        type="number"
        value={loanAmount}
        onChange={(e) => setLoanAmount(Number(e.target.value))} // State kullanıldı
        placeholder="Kredi Tutarını Girin"
      />
      <button className="btn" onClick={handleLoanRequest}>
        Başvur
      </button>
      <button className="btn" onClick={() => dispatch({ type: "startApp" })}>
        Geri
      </button>
    </div>
  );
}
