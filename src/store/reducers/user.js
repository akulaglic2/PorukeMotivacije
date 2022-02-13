const isLogged = (state = false, action) => {
  switch (action.type) {
    case "USER_LOGIN": {
      return action.data;
    }
    default:
      return state;
  }
};

export default isLogged;
