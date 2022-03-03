import axios from "axios";

export const getCategory1 = (data, history) => ({
  type: "GET_CATEGORIES_SUCCESS1",
  data,
  meta: { thunk: true },
});

export const getCategory = (data) => {
  return (dispatch) => {
    const url = "https://iquotes-node.herokuapp.com/categories";

    axios
      .get(url)
      .then((response) => {
        const posts = response.data;
        dispatch({ type: "GET_CATEGORIES", categories: posts });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};

export const setCategory = (data, history) => ({
  type: "SET_CATEGORIES",
  data,
  meta: { thunk: true },
});
