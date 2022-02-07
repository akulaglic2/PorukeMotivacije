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
import { styled } from "../theme";
import { render } from "../utils";
import renderAlignContent from "./renderAlignContent";
import renderAlignItems from "./renderAlignItems";
import renderDirection from "./renderDirection";
import renderGutter from "./renderGutter";
import renderJustifyContent from "./renderJustifyContent";
import renderWrap from "./renderWrap";
var Row = styled.div(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      ["\n  display: flex;\n\n  ", ";\n"],
      ["\n  display: flex;\n\n  ", ";\n"]
    )),
  function(props) {
    var renderer = {
      alignContent: function(value) {
        return renderAlignContent(value);
      },
      alignItems: function(value) {
        return renderAlignItems(value);
      },
      justifyContent: function(value) {
        return renderJustifyContent(value);
      },
      direction: function(value) {
        return renderDirection(value);
      },
      gutter: function(value) {
        return renderGutter(value, props.theme);
      },
      wrap: function(value) {
        return renderWrap(value);
      }
    };
    var valueMap = {
      alignContent: props.alignContent,
      alignItems: props.alignItems,
      justifyContent: props.justifyContent,
      direction: props.direction,
      gutter: props.noGutter,
      wrap: props.wrap
    };
    return render(valueMap, renderer, props.theme);
  }
);
export default Row;
var templateObject_1;
//# sourceMappingURL=Row.js.map
