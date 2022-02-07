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
import { breakpoints } from "../media";
import map from "./map";
import resolve from "./resolve";
export default (function(valueMap, renderer, theme) {
  var breakpointsMap = breakpoints(theme);
  var breakpointValues = map(valueMap, theme) || {};
  var breakpointKeys = Object.keys(breakpointValues).filter(function(
    breakpointKey
  ) {
    return (
      breakpointsMap[breakpointKey] != null &&
      typeof breakpointValues[breakpointKey] === "object"
    );
  });
  var propertyKeys = Object.keys(valueMap).filter(function(propertyKey) {
    return renderer[propertyKey] != null;
  });
  var previousValues = {};
  var count = 0;
  return breakpointKeys.reduce(function(acc, breakpointKey) {
    count++;
    return (
      acc +
      resolve(breakpointsMap, breakpointKey)(
        templateObject_1 ||
          (templateObject_1 = __makeTemplateObject(
            ["\n        ", "\n      "],
            ["\n        ", "\n      "]
          )),
        propertyKeys.reduce(function(acc2, propertyKey) {
          var value =
            breakpointValues[breakpointKey] &&
            breakpointValues[breakpointKey][propertyKey];
          if (count > 1 && previousValues[propertyKey] === value) {
            return acc2;
          } else {
            previousValues[propertyKey] = value;
            return acc2 + renderer[propertyKey](value);
          }
        }, "")
      )
    );
  }, "");
});
var templateObject_1;
//# sourceMappingURL=render.js.map
