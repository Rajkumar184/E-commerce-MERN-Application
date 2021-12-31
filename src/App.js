import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Profile from "./Auth/Profile";
import Account from "./Auth/Account";
import Login from "./Auth/Login";
import Logout from "./Auth/Logout";
import Signup from "./Auth/Signup";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import CheckOut from "./components/CheckOut";

function App() {
	return (
		<>
			<Navbar />

			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/product" exact component={Product} />
				<Route path="/About" exact component={About} />
				<Route path="/contact" exact component={Contact} />
				<Route path="/profile" exact component={Profile} />
				<Route path="/account" exact component={Account} />
				<Route path="/signup" exact component={Signup} />
				<Route path="/login" exact component={Login} />
				<Route path="/logout" exact component={Logout} />
				<Route path="/profile" exact component={Profile} />
				<Route path="/cart" exact component={Cart} />
				<Route path="/checkout" exact component={CheckOut} />

				<Route path="*" exact component={ErrorPage} />
			</Switch>
			<Footer />
		</>
	);
}

export default App;
