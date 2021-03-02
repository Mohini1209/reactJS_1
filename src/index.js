import React from "react";
import ReactDOM from "react-dom";

import Login from "./login.js";

function showData(data) {
  return data.toUpperCase();
}

function Welcome() {
  return <h2>This is Component {showData("hello")}</h2>;
}

const a = "Mohini";
const element = <h2>Hello dear {showData(a)}</h2>;
ReactDOM.render(<Login />, document.getElementById("root"));
