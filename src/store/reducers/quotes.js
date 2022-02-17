import { IS_LOGGED } from "../types";

const initState = [
  { id: 1, title: "Prvi", body: "ovo je test" },
  { id: 2, title: "Drugi", body: "test je ovo" },
  { id: 3, title: "Treci", body: "test " },
  { id: 4, title: "Cetvrti", body: "tovo" },
  { id: 5, title: "Peti", body: " je ovo" },
];

const getQuote = (state = [], action) => {
  // localStorage.setItem(
  //   "cart",
  //   JSON.stringify({
  //     state,
  //   })
  // );

  switch (action.type) {
    case "GET_QUOTES_SUCCESS":
      return state;
    case "GET_QUOTES":
      const newQuotes = action.login.quotes;
      return { ...state, newQuotes };
    case "SET_QUOTE":
      // const newState = state.posts;
      var newItem = {
        id: state.length + 1,
        title: action.data,
        body: "dfada",
      };
      // newState.push(newItem);

      // localStorage.setItem(
      //   "cart",
      //   JSON.stringify({
      //     newState,
      //   })
      // );
      state.push(newItem);
      return state;
    case "REMOVE_QUOTE":
      state.splice(action.data, 1);
      // localStorage.setItem("cart", JSON.stringify({ newState1 }));
      return state;
    case "EDIT_QUOTE":
      state[action.itemID].title = action.data;
      return state;

    default:
      return state;
  }
};

export default getQuote;
