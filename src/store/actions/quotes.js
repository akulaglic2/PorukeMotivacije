export const addQuote = (data, history) => ({
  type: "SET_QUOTE",
  data,
  meta: { thunk: true },
});
