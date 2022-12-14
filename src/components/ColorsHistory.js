import "../styles/ColorsHistory.css";
import clipboard from "./clipboard";
import { connect } from "react-redux";

const mapColorListToProps = (state) => {
  return {
    colors: state.card.colors,
  };
};

function ColorsHistory({ colors }) {
  return (
    <nav>
      <ul>
        {colors.map((item) => {
          let style = { backgroundColor: item.color };
          return (
            <li>
              <span className="list-item-info">
                <span className="color-bubble" style={style}></span>
                <span className="list-item-name"> {item.color} </span>
              </span>
              <span className="time">{item.time}</span>
              <button
                className="clipboard-button"
                onClick={() => {
                  clipboard(item.color);
                  alert("Color copied to clipboard!");
                }}
              >
                Copy to clipboard
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default connect(mapColorListToProps)(ColorsHistory);
