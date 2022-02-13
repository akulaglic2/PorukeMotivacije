import { IS_LOGGED } from "../types";

const initState = {
  posts: [
    { id: 1, title: "Prvi", body: "ovo je test" },
    { id: 2, title: "Drugi", body: "test je ovo" },
    { id: 3, title: "Treci", body: "test " },
    { id: 4, title: "Cetvrti", body: "tovo" },
    { id: 5, title: "Peti", body: " je ovo" },
  ],
};

const addQuote = (state = initState, action) => {
  localStorage.setItem(
    "cart",
    JSON.stringify({
      state,
    })
  );

  switch (action.type) {
    case "SET_QUOTE": {
      var newItem = {
        id: state.posts.length + 1,
        title: action.data,
        body: "dfada",
      };
      state.posts.push(newItem);
      localStorage.setItem(
        "cart",
        JSON.stringify({
          newItem,
        })
      );
    }
    case "REMOVE_QUOTE":
      {
        const newState = state.posts;
        newState.splice(action.data, 1);
        localStorage.setItem("cart", JSON.stringify({ newState }));
      }
      console.log("fff", state.posts);
  }
  return state;
};

export default addQuote;
