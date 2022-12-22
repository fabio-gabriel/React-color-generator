import { ColorContext } from "../contexts/ColorContext";
import "../styles/ActionButton.css";
import { useContext } from "react";

function ActionButton() {
  const Context = useContext(ColorContext);

  return (
    <div className="ActionButton">
      <h3>Click on the button to generate a new random color!</h3>
      <div className="centerButton">
        <button onMouseDown={Context.generateHexColor}>Generate</button>
      </div>
    </div>
  );
}

export default ActionButton;
