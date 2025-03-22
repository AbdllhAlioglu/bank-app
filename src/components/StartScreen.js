import React from "react";
import Users from "./Users";

export default function StartScreen({ dispatch, users }) {
  return (
    <div className="start">
      <h2>BankPlus'a Hoş Geldiniz</h2>
      <p>Hesabınıza erişmek için lütfen kullanıcı adınızı seçin</p>
      <Users dispatch={dispatch} users={users} />
    </div>
  );
}
