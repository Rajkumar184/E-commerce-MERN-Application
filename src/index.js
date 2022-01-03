import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalState from "./context/GlobalState";
// import Demos from "./demo/Demos";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<GlobalState>
				<App />
				{/* <Demos /> */}
			</GlobalState>
			<ToastContainer className="foo" style={{ fontWeight: "bold" }} />
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
