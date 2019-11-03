import React from "react";
import {render} from "react-dom";

const helloWorld = React.createElement("h1", null, "Hello World!");
render(helloWorld, document.getElementById("root"));