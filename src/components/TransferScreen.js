import { useState } from "react";

export default function TransferScreen({ user, dispatch, users }) {
  const [selectedUser, setSelectedUser] = useState(null);
  const [transferAmount, setTransferAmount] = useState(0);

  const handleTransfer = () => {
    // Bakiyeyi kontrol et
    if (transferAmount > user.bakiye) {
      alert("Bakiyenizden fazla miktar transfer edemezsiniz.");
      return; // İşlemi durdur
    }

    if (selectedUser && transferAmount > 0) {
      dispatch({
        type: "transferMoney",
        payload: {
          toUser: selectedUser,
          amount: transferAmount,
        },
      });
      dispatch({
        type: "addTransaction",
        payload: {
          type: `Para Transferi to ${selectedUser}`,
          amount: transferAmount,
          date: new Date().toLocaleString(),
        },
      });
      alert(`Başarıyla ${transferAmount} TL transfer edildi!`);
      setTransferAmount(0); // Input'u sıfırla
      setSelectedUser(null); // Seçimi sıfırla
    } else {
      alert("Geçerli bir kullanıcı ve transfer miktarı girin.");
    }
  };

  return (
    <div className="transfer-screen">
      <h2>Para Transferi Ekranı</h2>
      <p>Mevcut Bakiye: {user.bakiye} TL</p>

      <select
        value={selectedUser || ""}
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

      <input
        type="number"
        value={transferAmount}
        onChange={(e) => setTransferAmount(Number(e.target.value))}
        placeholder="Transfer Miktarını Girin"
      />
      <button className="btn" onClick={handleTransfer}>
        Transfer Et
      </button>
      <button className="btn" onClick={() => dispatch({ type: "startApp" })}>
        Geri
      </button>
    </div>
  );
}
