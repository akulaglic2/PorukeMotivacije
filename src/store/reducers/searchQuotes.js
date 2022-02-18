const getSearchQuote = (state = [], action) => {
  switch (action.type) {
    case "SEARCH_QUOTES_SUCCESS":
      return action.quotes;
    // case "SEARCH_QUOTES":
    //   const id = action.data.query;
    //   return { ...state, id };

    default:
      return state;
  }
};

export default getSearchQuote;
