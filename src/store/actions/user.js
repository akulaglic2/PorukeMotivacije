export const userLogin = (data, history) => ({
  type: "USER_LOGIN",
  data,
  meta: { thunk: true },
});

export const userLogout = (data, history) => ({
  type: "USER_LOGOUT",
  data,
  meta: { thunk: true },
});

export const setNewUsername = (newUser, oldUser) => ({
  type: "SET_NEW_USERNAME",
  newUser,
  oldUser,
  meta: { thunk: true },
});
