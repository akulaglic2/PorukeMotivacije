// export const addQuote = (data, history) => ({
//   type: "SET_QUOTE",
//   data,
//   meta: { thunk: true },
// });

// export const removeQuote = (data, history) => ({
//   type: "REMOVE_QUOTE",
//   data,
//   meta: { thunk: true },
// });

// export const editQuote = (data, itemID) => ({
//   type: "EDIT_QUOTE",
//   data,
//   itemID,
//   meta: { thunk: true },
// });

export const getQuote = (data, history) => ({
  type: "GET_QUOTES_SUCCESS",
  data,
  meta: { thunk: true },
});
