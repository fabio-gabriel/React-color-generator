import ColorContext from "./ColorContext";

function ContextProvider(props) {
  let state = {
    color: "#FFFFFF",
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

    state.color = "#" + newColor;
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
