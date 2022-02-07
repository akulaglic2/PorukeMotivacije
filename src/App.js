import React from "react";
import { Route, Switch, Link, BrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Layout from "./pages/Layout/Layout.js";
import NavBar from "./pages/Root/NavBar";
export default class App extends React.Component {
  render() {
    return <Root></Root>;
  }
}
