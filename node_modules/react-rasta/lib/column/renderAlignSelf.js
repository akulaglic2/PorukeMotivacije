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
export default (function(alignSelf) {
  var allowedValues = [
    "baseline",
    "center",
    "flex-end",
    "flex-start",
    "stretch"
  ];
  if (allowedValues.includes(alignSelf)) {
    return css(
      templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
          ["\n      align-self: ", " !important;\n    "],
          ["\n      align-self: ", " !important;\n    "]
        )),
      alignSelf
    );
  } else {
    return "";
  }
});
var templateObject_1;
//# sourceMappingURL=renderAlignSelf.js.map
