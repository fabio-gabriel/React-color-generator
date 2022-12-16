import { connect } from "react-redux";
import Container from "./Container";
import * as actions from "../actions";

const mapStateToProps = (state) => {
  return {
    color: state,
    styling: { backgroundColor: state },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleColorChange: () => dispatch({ type: actions.NEW_COLOR }),
  };
};

const ColorContainer = connect(mapStateToProps, mapDispatchToProps)(Container);

export default ColorContainer;
