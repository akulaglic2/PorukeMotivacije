export const userLogin = (data, history) => ({
  type: "USER_LOGIN",
  data,
  meta: { thunk: true },
});
