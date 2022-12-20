import "../styles/ActionButton.css";
import { connect } from "react-redux";
import * as actions from "../actions";

const mapDispatchToProps = (dispatch) => {
  return {
    handleColorChange: () => dispatch({ type: actions.NEW_COLOR }),
  };
};

function ActionButton({ handleColorChange }) {
  return (
    <div className="ActionButton">
      <h3>Click on the button to generate a new random color!</h3>
      <div className="centerButton">
        <button onMouseDown={handleColorChange}>Generate</button>
      </div>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(ActionButton);
