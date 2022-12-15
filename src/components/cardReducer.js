const generateHexColor = () => {
  let string = "1234567890ABCDEF";
  let newColor = "";

  for (let i = 0; i < 6; i++) {
    newColor += string[Math.floor(Math.random() * string.length)];
  }

  return "#" + newColor;
};

export const cardReducer = (state = "#FFFFFF", action) => {
  switch (action.type) {
    case "NewColor":
      return (state = generateHexColor());
      break;
    default:
      return state;
      break;
  }
};
