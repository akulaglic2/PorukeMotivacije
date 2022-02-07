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
var __spreadArrays =
  (this && this.__spreadArrays) ||
  function() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
      s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  };
import _css from "./css";
export default (function(breakpoints, key) {
  return function(strings) {
    var interpolations = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      interpolations[_i - 1] = arguments[_i];
    }
    var minWidth = breakpoints[key];
    var mediaBody = _css.apply(
      void 0,
      __spreadArrays([strings], interpolations)
    );
    if (minWidth && mediaBody.match(/\S/g)) {
      return _css(
        templateObject_1 ||
          (templateObject_1 = __makeTemplateObject(
            [
              "\n        @media (min-width: ",
              "px) {\n          ",
              "\n        }\n      "
            ],
            [
              "\n        @media (min-width: ",
              "px) {\n          ",
              "\n        }\n      "
            ]
          )),
        minWidth,
        mediaBody
      );
    }
    return mediaBody;
  };
});
var templateObject_1;
//# sourceMappingURL=resolve.js.map
