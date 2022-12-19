import { connect } from "react-redux";
import * as actions from "../actions";
import Card from "./Card";
import ActionButton from "./ActionButton";
import ColorsHistory from "./ColorsHistory";

const mapStateToProps = (state) => {
  return {
    color: state.card.colors[0].color,
    styling: { backgroundColor: state.card.colors[0].color },
  };
};

const mapColorListToProps = (state) => {
  return {
    colors: state.card.colors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleColorChange: () => dispatch({ type: actions.NEW_COLOR }),
  };
};

export const WrapperCard = connect(mapStateToProps)(Card);
export const WrapperActionButton = connect(
  null,
  mapDispatchToProps
)(ActionButton);
export const WrapperColorsHistory = connect(mapColorListToProps)(ColorsHistory);
