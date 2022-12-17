import { connect } from "react-redux";
import * as actions from "../actions";
import Card from "./Card";
import ActionButton from "./ActionButton";
import ColorsHistory from "./ColorsHistory";

const mapStateToProps = (state) => {
  return {
    color: state.colors[0].color,
    styling: { backgroundColor: state.colors[0].color },
  };
};

const mapColorListToProps = (state) => {
  return {
    colors: state.colors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleColorChange: () => dispatch({ type: actions.NEW_COLOR }),
  };
};

export const WrapperCard = connect(mapStateToProps)(Card);
export const WrapperActionButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionButton);
export const WrapperColorsHistory = connect(mapColorListToProps)(ColorsHistory);
