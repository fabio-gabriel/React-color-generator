import "../styles/ActionButton.css";

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

export default ActionButton;
