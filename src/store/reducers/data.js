import { IS_LOGGED } from "../types";

const initState = {
  posts: [
    { id: "1", title: "Prvi", body: "ovo je test" },
    { id: "2", title: "Drugi", body: "test je ovo" },
    { id: "3", title: "Treci", body: "test " },
    { id: "4", title: "Cetvrti", body: "tovo" },
    { id: "5", title: "Peti", body: " je ovo" },
  ],
};

const data = (state = initState, action) => {
  return state;
};

export default data;
