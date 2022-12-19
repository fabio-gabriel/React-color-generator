import "../styles/Card.css";

function Card({ color }) {
  const styling = { backgroundColor: color };

  return (
    <div className="Card" style={styling}>
      <div>
        <p>{color}</p>
      </div>
    </div>
  );
}

export default Card;
