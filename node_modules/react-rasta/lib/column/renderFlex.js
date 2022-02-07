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
export default (function(flex) {
  switch (flex) {
    case "grow":
      return css(
        templateObject_1 ||
          (templateObject_1 = __makeTemplateObject(
            ["\n        flex-grow: 1 !important;\n      "],
            ["\n        flex-grow: 1 !important;\n      "]
          ))
      );
    case "shrink":
      return css(
        templateObject_2 ||
          (templateObject_2 = __makeTemplateObject(
            ["\n        flex-shrink: 0 !important;\n      "],
            ["\n        flex-shrink: 0 !important;\n      "]
          ))
      );
    default:
      return "";
  }
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=renderFlex.js.map
