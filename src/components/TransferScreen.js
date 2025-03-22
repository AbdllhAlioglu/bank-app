import { useState } from "react";

export default function TransferScreen({ user, dispatch, users }) {
  const [selectedUser, setSelectedUser] = useState("");
  const [transferAmount, setTransferAmount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleTransfer = () => {
    setErrorMessage("");
    const amount = parseFloat(transferAmount);

    // Validasyon kontrolleri
    if (!selectedUser) {
      setErrorMessage("Lütfen bir kullanıcı seçin.");
      return;
    }

    if (isNaN(amount) || amount <= 0) {
      setErrorMessage("Lütfen geçerli bir tutar girin.");
      return;
    }

    // Bakiyeyi kontrol et
    if (amount > user.bakiye) {
      setErrorMessage("Bakiyenizden fazla miktar transfer edemezsiniz.");
      return;
    }

    dispatch({
      type: "transferMoney",
      payload: {
        toUser: selectedUser,
        amount: amount,
      },
    });

    dispatch({
      type: "addTransaction",
      payload: {
        type: `Para Transferi (${selectedUser})`,
        amount: amount,
        date: new Date().toLocaleString(),
      },
    });

    setTransferAmount("");
    setSelectedUser("");
    dispatch({ type: "startApp" });
  };

  return (
    <div className="transfer-screen">
      <h2>Para Transferi</h2>
      <p>
        Mevcut Bakiyeniz: <strong>{user.bakiye} ₺</strong>
      </p>

      <div className="form-group">
        <label className="form-label">Transfer yapılacak kullanıcı:</label>
        <select
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
        >
          <option value="" disabled>
            Kullanıcı Seçin
          </option>
          {users
            .filter((u) => u.userName !== user.userName)
            .map((u) => (
              <option key={u.userName} value={u.userName}>
                {u.userName}
              </option>
            ))}
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">Transfer tutarı:</label>
        <input
          type="number"
          value={transferAmount}
          onChange={(e) => setTransferAmount(e.target.value)}
          placeholder="Transfer miktarını girin"
        />
      </div>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <button className="btn" onClick={handleTransfer}>
        Transfer Et
      </button>
      <button
        className="btn btn-outline"
        onClick={() => dispatch({ type: "startApp" })}
      >
        Geri Dön
      </button>
    </div>
  );
}
