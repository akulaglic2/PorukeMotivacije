import { percentage } from "../utils";
export default (function(offset) {
  if (
    offset != null &&
    typeof offset === "number" &&
    offset > 0 &&
    offset < 12
  ) {
    return "margin-left: " + percentage(offset) + "%;";
  }
  return "";
});
//# sourceMappingURL=renderOffset.js.map
