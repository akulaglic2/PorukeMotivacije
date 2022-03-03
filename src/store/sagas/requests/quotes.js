const fetchQuotes = (action) => {
  const url =
    "https://iquotes-node.herokuapp.com/quotes?category_id=" +
    action.data.id +
    "&page=" +
    action.data.page;
  return fetch(url, {
    method: "GET",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  })
    .then((resposnse) => resposnse.json())
    .catch((error) => {
      throw error;
    });
};

export default fetchQuotes;
