import React from "react";
import { render } from "react-dom";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-reboot.min.css";

import items from "./items";

render(<App items={items} />, document.getElementById("root"));
registerServiceWorker();
