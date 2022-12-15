import "../styles/ActionButton.css";

function ActionButton({ handleColorChange, color }) {
  return (
    <div className="ActionButton">
      <h3>Click on the button to generate a new random color! {color}</h3>
      <div className="centerButton">
        <button onClick={handleColorChange}>Generate</button>
      </div>
    </div>
  );
}

export default ActionButton;
