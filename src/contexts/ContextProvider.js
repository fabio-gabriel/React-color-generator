import ColorContext from "./ColorContext";
import { useState } from "react";

function ContextProvider(props) {
  const [colors, setColor] = useState([
    { color: "#FFFFFF", time: formatDate() },
  ]);

  function formatDate() {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()} ${
      date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
    }:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}`;
  }

  let state = {
    colors: colors,
    user: {
      loggedIn: false,
      name: "Please Log In",
    },
  };

  const generateHexColor = () => {
    let string = "1234567890ABCDEF";
    let newColor = "";

    for (let i = 0; i < 6; i++) {
      newColor += string[Math.floor(Math.random() * string.length)];
    }

    setColor([{ color: "#" + newColor, time: formatDate() }, ...state.colors]);
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
