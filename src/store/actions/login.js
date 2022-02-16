export const login = (data) => ({
  type: "LOGIN_REQUESTED",
  data,
  meta: { thunk: true },
});
