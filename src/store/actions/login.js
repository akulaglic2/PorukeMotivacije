import axios from "axios";
export const logi1n = (data) => ({
  type: "LOGIN_REQUESTED1",
  data,
  meta: { thunk: true },
});

export const login = (data) => {
  return (dispatch) => {
    const url = "https://iquotes-node.herokuapp.com/login";

    axios
      .post(url, data)
      .then((response) => {
        dispatch({
          type: "LOGIN_REQUESTED",
          payload: {
            username: data.username,
            password: data.password,
          },
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};

export const userLogout = (history) => ({
  type: "LOGOUT_REQUESTED",
  history,
});
