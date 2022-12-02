import "./App.css";
import Card from "./components/Card.js";
import ActionButton from "./components/ActionButton.js";
import { useState } from "react";

function App() {
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
    <div className="App">
      <div className="panel">
        <Card styling={styling} color={color} />
        <ActionButton generateHexColor={generateHexColor} />
      </div>
    </div>
  );
}

export default App;
