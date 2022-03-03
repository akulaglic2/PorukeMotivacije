import axios from "axios";

export const getQuotes = (data) => {
  return (dispatch) => {
    const url =
      "https://iquotes-node.herokuapp.com/quotes?category_id=" +
      data.id +
      "&page=" +
      data.page;

    axios
      .get(url)
      .then((response) => {
        dispatch({ type: "GET_QUOTES", data: response.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};

export const getQuote = (data, history) => {
  return {
    type: "GET_QUOTES_SUCCESS",
    data,
    meta: { thunk: true },
  };
};

export const searchQuotes = (data, history) => ({
  type: "SEARCH_QUOTES",
  data,
  meta: { thunk: true },
});
