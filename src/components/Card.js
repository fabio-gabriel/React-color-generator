import ColorContext from "../contexts/ColorContext";
import "../styles/Card.css";
import { useContext } from "react";

function Card() {
  const Context = useContext(ColorContext);

  return (
      <div className="Card" style={Context.styling}>
        <div>
          <p>{Context.color}</p>
        </div>
      </div>
  );
}

export default Card;
