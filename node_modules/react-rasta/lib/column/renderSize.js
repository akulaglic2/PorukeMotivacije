import { percentage } from "../utils";
export default (function(size) {
  if (size == null || typeof size === "object" || size < 1 || size > 12) {
    return "";
  }
  if (size === "none") {
    return "\n      flex: 0 0 auto;\n      width: auto;\n      max-width: none;\n    ";
  }
  if (size === "auto") {
    return "\n      flex-basis: 0;\n      flex-grow: 1;\n      max-width: 100%;\n    ";
  }
  var calculatedPercentage = percentage(size);
  return (
    "\n    flex: 0 0 " +
    calculatedPercentage +
    "%;\n    max-width: " +
    calculatedPercentage +
    "%;\n  "
  );
});
//# sourceMappingURL=renderSize.js.map
