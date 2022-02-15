export const getCategory = (data, history) => ({
  type: "GET_CATEGORIES",
  data,
  meta: { thunk: true },
});

export const setCategory = (data, history) => ({
  type: "SET_CATEGORIES",
  data,
  meta: { thunk: true },
});
