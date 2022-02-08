import React from "react";
import PropTypes from "prop-types";
import Loadable from "react-loadable";
import { Box, styled } from "reakit";

const Input = (props) => {
  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Input;
