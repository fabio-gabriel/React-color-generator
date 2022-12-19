import * as actions from "../../actions";

let initialState = {
  user: {
    loggedIn: false,
    name: "Please Log In",
  },
};

export const logReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOG_IN:
      return {
        ...state,
        user: {
          loggedIn: true,
          name: "Fulano of Tal",
        },
      };
      break;
    case actions.LOG_OUT:
      return {
        ...state,
        user: {
          loggedIn: false,
          name: "Please Log In",
        },
      };
      break;
    default:
      return state;
      break;
  }
};
