import ColorContext from "../contexts/ColorContext";
import "../styles/Card.css";

function Card() {
  return (
    <ColorContext.Consumer>
      {(context) => (
        <div className="Card">
          <div>
            <p>{context.color}</p>
          </div>
        </div>
      )}
    </ColorContext.Consumer>
  );
}

export default Card;
