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
export default (function(alignItems) {
  var allowedValues = [
    "baseline",
    "center",
    "flex-end",
    "flex-start",
    "stretch"
  ];
  if (allowedValues.includes(alignItems)) {
    return css(
      templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
          ["\n      align-items: ", " !important;\n    "],
          ["\n      align-items: ", " !important;\n    "]
        )),
      alignItems
    );
  } else {
    return "";
  }
});
var templateObject_1;
//# sourceMappingURL=renderAlignItems.js.map
