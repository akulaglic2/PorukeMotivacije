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
import Column from "../column";
import { gutterWidth } from "../theme";
import { css } from "../utils";
export default (function(noGutter, theme) {
  if (noGutter != null && typeof noGutter === "boolean" && noGutter) {
    return css(
      templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
          [
            "\n      margin-right: 0;\n      margin-left: 0;\n\n      > ",
            " {\n        padding-right: 0;\n        padding-left: 0;\n      }\n    "
          ],
          [
            "\n      margin-right: 0;\n      margin-left: 0;\n\n      > " /* sc-selector */,
            " {\n        padding-right: 0;\n        padding-left: 0;\n      }\n    "
          ]
        )),
      /* sc-selector */ Column
    );
  } else {
    var width = gutterWidth(theme);
    return css(
      templateObject_2 ||
        (templateObject_2 = __makeTemplateObject(
          [
            "\n      margin-right: -",
            "px;\n      margin-left: -",
            "px;\n\n      > ",
            " {\n        padding-right: ",
            "px;\n        padding-left: ",
            "px;\n      }\n    "
          ],
          [
            "\n      margin-right: -",
            "px;\n      margin-left: -",
            "px;\n\n      > " /* sc-selector */,
            " {\n        padding-right: ",
            "px;\n        padding-left: ",
            "px;\n      }\n    "
          ]
        )),
      width,
      width,
      /* sc-selector */ Column,
      width,
      width
    );
  }
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=renderGutter.js.map
