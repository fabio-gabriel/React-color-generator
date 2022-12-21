import ColorContext from "./ColorContext";
import { useState } from "react";

function ContextProvider(props) {
  const [color, setColor] = useState("#FFFFFF");

  function formatDate() {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()} ${
      date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
    }:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}`;
  }

  let state = {
    colors: [{ color: "#FFFFFF", time: formatDate() }],
    user: {
      loggedIn: false,
      name: "Please Log In",
    },
  };

  const generateHexColor = () => {
    let string = "1234567890abcdef";
    let newColor = "";

    for (let i = 0; i < 6; i++) {
      newColor += string[Math.floor(Math.random() * string.length)];
    }

    state.colors.unshift({ color: newColor, time: formatDate() });
  };

  return (
    <ColorContext.Provider
      value={{
        user: state.user,
        colors: state.colors,
        generateHexColor,
      }}
    >
      {props.children}
    </ColorContext.Provider>
  );
}

export default ContextProvider;
