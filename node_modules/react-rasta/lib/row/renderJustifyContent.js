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
export default (function(contentJustify) {
  var allowedValues = [
    "center",
    "flex-end",
    "flex-start",
    "space-around",
    "space-between"
  ];
  if (allowedValues.includes(contentJustify)) {
    return css(
      templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
          ["\n      justify-content: ", " !important;\n    "],
          ["\n      justify-content: ", " !important;\n    "]
        )),
      contentJustify
    );
  } else {
    return "";
  }
});
var templateObject_1;
//# sourceMappingURL=renderJustifyContent.js.map
