import { IS_LOGGED } from "../types";

const initState = {
  posts: [
    { id: "1", title: "Azra", body: "ovo je test" },
    { id: "2", title: "Azric", body: "test je ovo" },
    { id: "3", title: "Dzemo", body: "test " },
    { id: "4", title: "Dzemic", body: "tovo" },
    { id: "5", title: "AzraDzem", body: " je ovo" },
  ],
};

const data = (state = initState, action) => {
  return state;
};

export default data;
