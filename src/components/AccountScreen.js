import React from "react";
import TransactionControls from "./TransactionControls";

export default function AccountScreen({ user, dispatch }) {
  return (
    <div className="card account-screen">
      <div className="account-info">
        <div className="account-username">Hoş geldiniz, {user.userName}</div>
        <div className="account-balance">{user.bakiye} ₺</div>
      </div>
      <TransactionControls user={user} dispatch={dispatch} />
    </div>
  );
}
