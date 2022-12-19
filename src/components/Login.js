import "../styles/Login.css";

export default function Login({ user, handleLogin, handleLogout }) {
  let button;
  if (user.loggedIn) {
    button = <button onClick={handleLogout} className="logout-button"> Log out </button>;
  } else {
    button = <button onClick={handleLogin} className="login-button"> Log in </button>;
  }
  return (
    <div className="user-card">
      <span className="material-symbols-outlined">account_circle</span>
      <span> {user.name} </span>
      {button}
    </div>
  );
}
