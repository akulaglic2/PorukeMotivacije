const getCategory = (state = [], action) => {
  switch (action.type) {
    case "GET_CATEGORIES_SUCCESS":
      return state;
    case "GET_CATEGORIES":
      const newCategory = action.login;
      return { ...state, newCategory };
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
