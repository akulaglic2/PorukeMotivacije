const url = "https://iquotes-node.herokuapp.com/login";

const fatchLogin = (action) => {
  return fetch(url, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({
      username: action.data.username,
      password: action.data.password,
    }),
  })
    .then((resposnse) => resposnse.json())
    .catch((error) => {
      throw error;
    });
};

export default fatchLogin;
