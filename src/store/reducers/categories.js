const getCategory = (state = [], action) => {
  switch (action.type) {
    case "GET_CATEGORIES":
      return action.categories;
    ////////////////
    case "GET_CATEGORIES_SUCCESS":
      return state;
    case "SET_CATEGORIES":
      var newItem = {
        id: state.length + 1,
        title: action.data.category_name,
      };
      state.push(newItem);
      return state;

    default:
      return state;
  }
};
export default getCategory;
