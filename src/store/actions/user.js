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
