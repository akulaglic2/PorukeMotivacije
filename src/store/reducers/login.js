const isLogged = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_REQUESTED":
      return { ...state };

    case "LOGIN_SUCCESS":
      return { ...state, login: action.login };
    case "LOGIN_ERROR":
      return { ...state, error: action.message };
    case "LOGOUT_SUCCESS":
      return {};
    default:
      return state;
  }
};
export default isLogged;
