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
export default (function(alignContent) {
  var allowedValues = [
    "center",
    "flex-end",
    "flex-start",
    "space-around",
    "space-between",
    "stretch"
  ];
  if (allowedValues.includes(alignContent)) {
    return css(
      templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
          ["\n      align-content: ", " !important;\n    "],
          ["\n      align-content: ", " !important;\n    "]
        )),
      alignContent
    );
  } else {
    return "";
  }
});
var templateObject_1;
//# sourceMappingURL=renderAlignContent.js.map
