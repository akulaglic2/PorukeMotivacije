import { IS_LOGGED } from "../types";

export const isLogged = () => {
  return { type: IS_LOGGED };
};
