import Card from "./Card";
import ActionButton from "./ActionButton";

function Container({ color, styling, handleColorChange }) {
  console.log(color, styling, handleColorChange);
  return (
    <div className="panel">
      <Card styling={styling} color={color} />
      <ActionButton handleColorChange={handleColorChange} />
    </div>
  );
}

export default Container;
