const initState = {
  login: [],
  error: null,
};

const isLogged = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_REQUESTED":
      return { ...state };

    case "LOGIN_SUCCESS":
      console.log("fffTOOOOOOOOOOOO");
      return { ...state, login: action.login };
    case "LOGIN_ERROR":
      return { ...state, error: action.message };

    default:
      return state;
  }
};
export default isLogged;
