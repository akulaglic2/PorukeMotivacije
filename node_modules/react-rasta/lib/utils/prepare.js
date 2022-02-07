import { defaultBreakpointKey } from "../media";
export default (function(values, theme) {
  var defaultKey = defaultBreakpointKey(theme);
  values = values || {};
  if (typeof values !== "object") {
    var newValues = {};
    if (defaultKey != null) {
      newValues[defaultKey] = values;
    }
    values = newValues;
  }
  if (defaultKey != null && values[defaultKey] == null) {
    values[defaultKey] = undefined;
  }
  return values;
});
//# sourceMappingURL=prepare.js.map
