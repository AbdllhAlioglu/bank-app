import React from "react";

export default function DebtInquiry({ user, dispatch }) {
  if (!user || !user.debt) {
    return <p>Borç bilgisi bulunamadı.</p>;
  }

  const totalDebt = user.debt.reduce((acc, item) => acc + item.amount, 0);

  const handlePayDebt = (amount, index) => {
    if (user.bakiye >= amount) {
      dispatch({ type: "payDebt", payload: { amount, index } });
      alert("Borç başarıyla ödendi!");
    } else {
      alert("Yetersiz bakiye. Lütfen geçerli bir tutar girin.");
    }
  };

  return (
    <div className="debt-inquiry">
      <h2>{user.userName} Borç Sorgulama</h2>
      <ul>
        {user.debt.map((item, index) => (
          <li key={index}>
            {item.description}: {item.amount} TL
            <button onClick={() => handlePayDebt(item.amount, index)}>
              Öde
            </button>
          </li>
        ))}
      </ul>
      <h3>Toplam Borç: {totalDebt} TL</h3>
      <button className="btn" onClick={() => dispatch({ type: "startApp" })}>
        Geri
      </button>
    </div>
  );
}
