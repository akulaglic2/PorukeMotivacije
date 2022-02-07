import breakpoints from "./breakpoints";
export default (function(theme) {
  var breakpointMap = breakpoints(theme);
  for (var key in breakpointMap) {
    if (breakpointMap[key] === 0) {
      return key;
    }
  }
  return null;
});
//# sourceMappingURL=defaultBreakpointKey.js.map
