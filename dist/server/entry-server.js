import { jsx, Fragment } from "react/jsx-runtime";
import React, { useState } from "react";
import ReactDOMServer from "react-dom/server";
import * as pkg from "@mui/x-date-pickers/node/AdapterDayjs/index.js";
import AccessAlarm from "@mui/icons-material/AccessAlarm.js";
const { AdapterDayjs } = pkg;
function App() {
  useState(0);
  console.log(AdapterDayjs);
  console.log(AccessAlarm);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(AccessAlarm, {}) }) });
}
function render() {
  const html = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(App, {}) })
  );
  return { html };
}
export {
  render
};
