import "../styles/Login.css";
import { connect } from "react-redux";
import * as actions from "../actions";

const mapLoginToProps = (state) => {
  return {
    user: state.log.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: () => dispatch({ type: actions.LOG_IN }),
    handleLogout: () => dispatch({ type: actions.LOG_OUT }),
  };
};

function Login({ user, handleLogin, handleLogout }) {
  return (
    <div className="user-card">
      <span className="material-symbols-outlined">account_circle</span>
      <span> {user.name} </span>
      {user.loggedIn ? (
        <button onClick={handleLogout} className="logout-button">
          Log out
        </button>
      ) : (
        <button onClick={handleLogin} className="login-button">
          Log in
        </button>
      )}
    </div>
  );
}

export default connect(mapLoginToProps, mapDispatchToProps)(Login);
