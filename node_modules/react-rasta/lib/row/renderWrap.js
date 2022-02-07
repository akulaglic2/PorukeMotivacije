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
function renderWrap(wrap) {
  var allowedValues = ["nowrap", "wrap", "wrap-reverse"];
  if (wrap == null || !allowedValues.includes(wrap)) {
    return renderWrap("wrap");
  } else {
    return css(
      templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
          ["\n      flex-wrap: ", ";\n    "],
          ["\n      flex-wrap: ", ";\n    "]
        )),
      wrap
    );
  }
}
export default renderWrap;
var templateObject_1;
//# sourceMappingURL=renderWrap.js.map
