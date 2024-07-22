import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import { jsx as _jsx } from "react/jsx-runtime.js";

function MyApp() {
  return <h1>Custom App! | Yadnesh</h1>;
}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://WWW.google.com",
//     target: "_blank",
//   },
//   children: "Click this link to visit google",
// };

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit google
  </a>
);

const anotherUser = "Yadnesh2";

const ReactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Visit google",
  anotherUser
);

ReactDOM.createRoot(document.getElementById("root")).render(ReactElement);
