import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalState from "./context/GlobalState";
// import Demos from "./demo/Demos";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<GlobalState>
				<App />
				{/* <Demos /> */}
			</GlobalState>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
