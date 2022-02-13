export const addQuote = (data, history) => ({
  type: "SET_QUOTE",
  data,
  meta: { thunk: true },
});

export const removeQuote = (data, history) => ({
  type: "REMOVE_QUOTE",
  data,
  meta: { thunk: true },
});
