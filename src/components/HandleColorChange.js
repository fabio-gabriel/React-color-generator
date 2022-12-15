import { connect } from "react-redux";
import Container from "./Container";

const mapStateToProps = (state) => {
  return {
    color: state,
    styling: { backgroundColor: state },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleColorChange: () => dispatch({ type: "NewColor" }),
  };
};

const ColorContainer = connect(mapStateToProps, mapDispatchToProps)(Container);

export default ColorContainer;
