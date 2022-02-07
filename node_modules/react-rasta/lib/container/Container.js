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
import Row from "../row";
import { gutterWidth, styled } from "../theme";
import { css, render } from "../utils";
import renderWidth from "./renderWidth";
import getWidth from "./width";
var Container = styled.div(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      [
        "\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n\n  ",
        " ",
        ";\n"
      ],
      [
        "\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n\n  ",
        " ",
        ";\n"
      ]
    )),
  function(props) {
    var width = gutterWidth(props.theme);
    return (
      "\n      padding-right: " +
      width +
      "px;\n      padding-left: " +
      width +
      "px;\n    "
    );
  },
  function(props) {
    if (props.fullscreen) {
      //fullscreen();
      return css(
        templateObject_1 ||
          (templateObject_1 = __makeTemplateObject(
            [
              "\n        height: 100%;\n\n        > ",
              " {\n          height: 100%;\n        }\n      "
            ],
            [
              "\n        height: 100%;\n\n        > ",
              " {\n          height: 100%;\n        }\n      "
            ]
          )),
        Row
      );
    } else if (props.fluid) {
      return "";
    } else {
      var renderer = {
        width: function(value) {
          return renderWidth(value);
        }
      };
      var valueMap = {
        width: getWidth(props)
      };
      return render(valueMap, renderer, props.theme);
    }
  }
);
export default Container;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Container.js.map
