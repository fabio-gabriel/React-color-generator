import { ColorContext } from "../contexts/ColorContext";
import "../styles/Card.css";
import { useContext } from "react";

function Card() {
  const Context = useContext(ColorContext);
  const styling = { backgroundColor: Context.colors[0].color };

  return (
    <div className="Card" style={styling}>
      <div>
        <p>{Context.colors[0].color}</p>
      </div>
    </div>
  );
}

export default Card;
