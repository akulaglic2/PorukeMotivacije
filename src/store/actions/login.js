export const login = (data) => ({
  type: "LOGIN_REQUESTED",
  data,
  meta: { thunk: true },
});

export const userLogout = (history) => ({
  type: "LOGOUT_SUCCESS",
  history,
});
