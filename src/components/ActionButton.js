import ColorContext from "../contexts/ColorContext";
import "../styles/ActionButton.css";

function ActionButton() {
  return (
    <ColorContext.Consumer>
      {(context) => (
        <div className="ActionButton">
          <h3>Click on the button to generate a new random color!</h3>
          <div className="centerButton">
            <button onClick={context.generateHexColor}>Generate</button>
          </div>
        </div>
      )}
    </ColorContext.Consumer>
  );
}

export default ActionButton;
