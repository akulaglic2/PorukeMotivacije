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
import renderAlignSelf from "./renderAlignSelf";
import renderFlex from "./renderFlex";
import renderOffset from "./renderOffset";
import renderOrder from "./renderOrder";
import renderSize from "./renderSize";
var Column = styled.div(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        "\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n\n  ",
        ";\n"
      ],
      [
        "\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n\n  ",
        ";\n"
      ]
    )),
  function(props) {
    var renderer = {
      alignSelf: function(value) {
        return renderAlignSelf(value);
      },
      flex: function(value) {
        return renderFlex(value);
      },
      offset: function(value) {
        return renderOffset(value);
      },
      order: function(value) {
        return renderOrder(value);
      },
      size: function(value) {
        return renderSize(value);
      }
    };
    var valueMap = {
      alignSelf: props.alignSelf,
      flex: props.flex,
      offset: props.offset,
      order: props.order,
      size: props.size
    };
    return render(valueMap, renderer, props.theme);
  }
);
export default Column;
var templateObject_1;
//# sourceMappingURL=Column.js.map
