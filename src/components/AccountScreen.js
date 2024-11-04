import React from "react";
import TransactionControls from "./TransactionControls";

export default function AccountScreen({ user, dispatch }) {
  return (
    <div>
      <h2>Hoşgeldiniz {user.userName}</h2>
      <h3>Bakiyeniz: {user.bakiye} </h3>
      <TransactionControls user={user} dispatch={dispatch} />
    </div>
  );
}
