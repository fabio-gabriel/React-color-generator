import * as actions from "../../actions";

function formatDate() {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()} ${
    date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
  }:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}`;
}

const generateHexColor = () => {
  let string = "1234567890ABCDEF";
  let newColor = "";

  for (let i = 0; i < 6; i++) {
    newColor += string[Math.floor(Math.random() * string.length)];
  }

  return "#" + newColor;
};

let initialState = {
  colors: [{ color: "#FFFFFF", time: formatDate() }],
};

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.NEW_COLOR:
      return {
        ...state,
        colors: [
          { color: generateHexColor(), time: formatDate() },
          ...state.colors,
        ],
      };
      break;
    default:
      return state;
      break;
  }
};
