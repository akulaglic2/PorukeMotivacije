const url =
  "https://iquotes-node.herokuapp.com/quotes?category_id=2&page=1&per_page=20";

const fatchQuotes = (action) => {
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
