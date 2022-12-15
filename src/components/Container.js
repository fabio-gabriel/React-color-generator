import { Provider, connect } from "react-redux";
import Card from "./Card.js";
import ActionButton from "./ActionButton.js";

const mapStateToProps = (state) => {
  return {
    color: state,
    styling: {backgroundColor: state}
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleColorChange: () => dispatch({ type: "NewColor" }),
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(ActionButton);

export default Container;
