import React, { useContext } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import GlobalContext from "../context/GlobalContext";
import CartItem from "./CartItem";

const useStyles = makeStyles({
	emptyButton: {
		minWidth: "160px",
		marginRight: "20px",
	},
	checkoutButton: {
		minWidth: "160px",
		marginRight: "-25px",
	},

	cardDetails: {
		display: "flex",
		marginTop: "10%",
		width: "100%",
		justifyContent: "space-between",
	},
});

const Cart = () => {
	const { cartItems, clearCart } = useContext(GlobalContext);
	const classes = useStyles();

	const renderEmptyCart = () => (
		<Typography variant="subtitle1">
			You have no items in your shopping cart,
			<Link className="links" to="/product" style={{ textDecoration: "none" }}>
				start adding some
			</Link>
			!
		</Typography>
	);

	if (!cartItems) return "Loading";

	const renderCart = () => (
		<>
			<section>
				<CartItem cartItems={cartItems} />
			</section>
			<div className={classes.cardDetails}>
				<Typography variant="h4">
					Subtotal({cartItems.length}): ₹
					{cartItems.reduce((amount, item) => item.price + amount, 0)}
				</Typography>
				<div className={classes.cartbutton}>
					<Button
						className={classes.emptyButton}
						size="large"
						type="button"
						variant="contained"
						color="secondary"
						onClick={clearCart}
					>
						Empty cart
					</Button>
					<Button
						className={classes.checkoutButton}
						component={Link}
						to="/checkout"
						size="large"
						type="button"
						variant="contained"
						color="primary"
						style={{ color: "white" }}
					>
						Checkout
					</Button>
				</div>
			</div>
		</>
	);

	return (
		<>
			<Container style={{ paddingBottom: "80px" }}>
				<Typography variant="h3" gutterBottom style={{ marginTop: "5%" }}>
					Your Shopping Cart
				</Typography>
				{!cartItems.length ? renderEmptyCart() : renderCart()}
			</Container>
		</>
	);
};

export default Cart;
