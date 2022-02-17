const fatchQuotes = (action) => {
  const url =
    "https://iquotes-node.herokuapp.com/quotes?category_id=" +
    action.data.id +
    "&page=1&per_page=20";
  return fetch(url, {
    method: "GET",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  })
    .then((resposnse) => resposnse.json())
    .catch((error) => {
      throw error;
    });
};

export default fatchQuotes;
