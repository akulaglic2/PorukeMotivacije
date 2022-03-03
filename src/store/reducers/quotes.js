import { IS_LOGGED } from "../types";

const initialState = {
  allQuotes: [],
};

const getQuote = (state = initialState, action) => {
  switch (action.type) {
    case "GET_QUOTES":
      return {
        ...state,
        allQuotes: [...state.allQuotes, ...action.data.quotes],
      };

    ////////////
    case "GET_QUOTES_SUCCESS":
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
