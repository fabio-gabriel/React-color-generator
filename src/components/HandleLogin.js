import { connect } from "react-redux";
import * as actions from "../actions";
import Login from "./Login";

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

export const WrapperLogin = connect(mapLoginToProps, mapDispatchToProps)(Login);
