import React from "react";
import Users from "./Users";

export default function StartScreen({ dispatch, users }) {
  return (
    <div className="start">
      <p>Giriş için kullanıcı seçiniz.</p>
      <Users dispatch={dispatch} users={users} />
    </div>
  );
}
