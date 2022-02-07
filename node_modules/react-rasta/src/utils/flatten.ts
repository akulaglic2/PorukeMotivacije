import { FlattenSimpleInterpolation } from "styled-components";

export default (interpolations: FlattenSimpleInterpolation): string => {
  return interpolations.join("");
};
