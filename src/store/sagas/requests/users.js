const url = "https://iquotes-node.herokuapp.com/login";

const fatchLogin = () => {
  return fetch(url, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "dzemo@dzemo.com",
      password: "jakotezakpassword!",
    }),
  })
    .then((resposnse) => resposnse.json())
    .catch((error) => {
      throw error;
    });
};

export default fatchLogin;
