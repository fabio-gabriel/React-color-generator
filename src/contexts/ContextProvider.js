import ColorContext from "./ColorContext";
import { useState } from "react";

function ContextProvider(props) {
  const [color, setColor] = useState("#FFFFFF");

  let state = {
    color: color,
  };
  state.styling = {
    backgroundColor: state.color,
  };

  const generateHexColor = () => {
    let string = "1234567890abcdef";
    let newColor = "";

    for (let i = 0; i < 6; i++) {
      newColor += string[Math.floor(Math.random() * string.length)];
    }

    setColor("#" + newColor);
    state.styling = {
      backgroundColor: newColor,
    };
  };

  return (
    <ColorContext.Provider
      value={{
        styling: state.styling,
        color: state.color,
        generateHexColor,
      }}
    >
      {props.children}
    </ColorContext.Provider>
  );
}

export default ContextProvider;
