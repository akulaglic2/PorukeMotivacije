const url = "https://iquotes-node.herokuapp.com/categories";

const fetchCategories = (action) => {
  return fetch(url, {
    method: "GET",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  })
    .then((resposnse) => resposnse.json())
    .catch((error) => {
      throw error;
    });
};

export default fetchCategories;
