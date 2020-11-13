import React from "react";
import Header from "./components/header.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import ReactDOM from "react-dom";

export default function App() {
  return <Header/>;
}