const isLogged = (state = [], action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return action.data;

    case "USER_LOGOUT":
      return [];

    case "SET_NEW_USERNAME":
      const newUser = action.newUser.usernameProfile;
      return { ...state, username: newUser };
    default:
      return state;
  }
};
export default isLogged;
