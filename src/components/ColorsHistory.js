import "../styles/ColorsHistory.css";
import clipboard from "./clipboard";

export default function ColorsHistory({ colors }) {
  return (
    <nav>
      <ul>
        {colors.map((item) => {
          let style = { backgroundColor: item.color };
          return (
            <li>
              <span>
                <span className="color-bubble" style={style}></span>
                <span className="list-item-name"> {item.color} </span>
              </span>
              <button
                className="clipboard-button"
                onClick={() => {
                  clipboard(item.color);
                  alert("Color copied to clipboard!");
                }}
              >
                {" "}
                Copy to clipboard{" "}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
