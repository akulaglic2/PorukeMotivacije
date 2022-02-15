export const getCategory = (data, history) => ({
  type: "GET_CATEGORIES",
  data,
  meta: { thunk: true },
});
