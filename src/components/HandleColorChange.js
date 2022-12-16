import { connect } from "react-redux";
import * as actions from "../actions";
import Card from "./Card";
import ActionButton from "./ActionButton";

const mapStateToProps = (state) => {
  return {
    color: state.colors[state.colors.length - 1].color,
    styling: { backgroundColor: state.colors[state.colors.length - 1].color},
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleColorChange: () => dispatch({ type: actions.NEW_COLOR }),
  };
};

export const WrapperCard = connect(mapStateToProps)(Card);
export const WrapperActionButton = connect(mapStateToProps, mapDispatchToProps)(ActionButton);
