import "../styles/ColorsHistory.css";
import clipboard from "./clipboard";
import ColorContext from "../contexts/ColorContext";
import { useContext } from "react";

export default function ColorsHistory({ colors }) {
  const Context = useContext(ColorContext);

  return (
    <nav>
      <ul>
        {Context.colors.map((item) => {
          let style = { backgroundColor: item.color };
          return (
            <li key={item.color}>
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
