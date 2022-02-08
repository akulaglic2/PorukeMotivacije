const initState = {
  posts: [
    { id: "1", title: "Azra", body: "ovo je test" },
    { id: "2", title: "Azric", body: "test je ovo" },
  ],
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
