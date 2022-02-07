var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };
import { css } from "../utils";
export default (function(direction) {
  var allowedValues = ["column", "column-reverse", "row", "row-reverse"];
  if (allowedValues.includes(direction)) {
    return css(
      templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
          ["\n      flex-direction: ", " !important;\n    "],
          ["\n      flex-direction: ", " !important;\n    "]
        )),
      direction
    );
  } else {
    return "";
  }
});
var templateObject_1;
//# sourceMappingURL=renderDirection.js.map
