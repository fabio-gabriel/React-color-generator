import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";
import "../styles/Login.css";

export default function Login({}) {
  const Context = useContext(LoginContext);

  return (
    <div className="user-card">
      <span className="material-symbols-outlined">account_circle</span>
      <span> {Context.user.name} </span>
      {Context.user.loggedIn ? (
        <button onClick={Context.setUserLogout} className="logout-button">
          Log out
        </button>
      ) : (
        <button onClick={Context.setUserLogin} className="login-button">
          Log in
        </button>
      )}
    </div>
  );
}
