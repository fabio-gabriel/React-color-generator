import "../styles/Card.css";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    color: state.card.colors[0].color,
  };
};

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

export default connect(mapStateToProps)(Card);
