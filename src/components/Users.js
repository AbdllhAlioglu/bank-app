import React from "react";

export default function Users({ dispatch, users }) {
  return (
    <div className="users">
      {users.map((user) => (
        <button
          key={user.userName}
          className="btn"
          onClick={() => {
            dispatch({ type: "setUser", payload: user });
            dispatch({ type: "startApp" });
          }}
        >
          {user.userName}
        </button>
      ))}
    </div>
  );
}
