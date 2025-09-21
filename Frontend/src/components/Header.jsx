import React from "react";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();
  return (
    <header className="header">
      <div className="header-left">
        <div className="brand">Contacts Store</div>
        <div className="sub muted">Manage your contacts</div>
      </div>
      <div className="header-right">
        <div className="profile">
          <div className="avatar">{user?.name?.[0]?.toUpperCase() || "U"}</div>
          <div className="username">{user?.name}</div>
        </div>
        <button onClick={logout} className="btn danger">
          Logout
        </button>
      </div>
    </header>
  );
}
