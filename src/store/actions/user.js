export const userLogin = (data, history) => ({
  type: "USER_LOGIN",
  data,
  meta: { thunk: true },
});

export const addQuote = (data, history) => ({
  type: "SET_QUOTE",
  data,
  meta: { thunk: true },
});
