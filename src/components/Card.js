import { forwardRef } from "react";
import "../styles/Card.css";

const Card = forwardRef() => {
  const [color, setColor] = useState("#FFFFFF");
  let styling = {
    backgroundColor: color,
  };

  const generateHexColor = () => {
    let string = "1234567890abcdef";
    let newColor = "";

    for (let i = 0; i < 6; i++) {
      newColor += string[Math.floor(Math.random() * string.length)];
    }

    setColor("#" + newColor);
    styling = {
      backgroundColor: newColor,
    };
  };

  return (
    <div className="Card" style={styling}>
      <div>
        <p>{color}</p>
      </div>
    </div>
  );
}

export default Card;
