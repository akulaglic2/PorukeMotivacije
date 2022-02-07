import defaultWidth from "./defaultWidth";
export default (function(props) {
  return (
    (props && (props.width || (props.theme && props.theme.containerWidth))) ||
    defaultWidth
  );
});
//# sourceMappingURL=width.js.map
