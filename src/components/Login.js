import { useContext } from "react";
import ColorContext from "../contexts/ColorContext";
import "../styles/Login.css";

export default function Login({}) {
  const Context = useContext(ColorContext);

  return (
    <div className="user-card">
      <span className="material-symbols-outlined">account_circle</span>
      <span> {Context.user.name} </span>
      {Context.user.loggedIn ? (
        <button className="logout-button">Log out</button>
      ) : (
        <button className="login-button">Log in</button>
      )}
    </div>
  );
}
