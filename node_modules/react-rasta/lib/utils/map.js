import prepare from "./prepare";
export default (function(source, theme) {
  if (source != null) {
    return Object.keys(source).reduce(function(destination, propertyKey) {
      var values = prepare(source[propertyKey], theme);
      Object.keys(values).forEach(function(breakpointKey) {
        destination[breakpointKey] = destination[breakpointKey] || {};
        destination[breakpointKey][propertyKey] = values[breakpointKey];
      });
      return destination;
    }, {});
  }
  return null;
});
//# sourceMappingURL=map.js.map
