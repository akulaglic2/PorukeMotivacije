import React from "react";
import PropTypes from "prop-types";
import Loadable from "react-loadable";
import { Box, styled } from "reakit";

const Loading = () => (
  <Box justifyContent="center" alignItems="center" minHeight="100vh">
   
  </Box>
);

export function LoadableComponent(opts) {
  return Loadable(
    Object.assign(
      {
        loading: Loading,
        delay: 300,
        timeout: 10000
      },
      opts
    )
  );
}

LoadableComponent.propTypes = {
  opts: PropTypes.object.isRequired
};
