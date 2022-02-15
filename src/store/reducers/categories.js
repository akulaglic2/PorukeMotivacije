const initState = [
  { id: 1, title: "Kategorija_1" },
  { id: 2, title: "Kategorija_2" },
  { id: 3, title: "Kategorija_3" },
];

const getCategory = (state = initState, action) => {
  switch (action.type) {
    case "GET_CATEGORIES":
      return state;

    default:
      return state;
  }
};
export default getCategory;
