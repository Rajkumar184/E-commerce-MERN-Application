import React, { useContext } from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Skeleton from "@mui/material/Skeleton";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import GlobalContext from "../context/GlobalContext";

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const useStyles = makeStyles({
	root: {
		height: "100%",
		width: "100%",
	},
	media: {
		height: "0%",
		paddingTop: "80%",
	},
	cardActions: {
		display: "flex",
		justifyContent: "space-around",
		// position: "absolute",
		// bottom: "0px",
	},
	cardContent: {
		display: "flex",
		justifyContent: "space-between",
	},
});

const ProductsData = ({ products, loading, search }) => {
	const { addToCart } = useContext(GlobalContext);
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	// .filter((products) => {
	// 					if (search === "") {
	// 						return products;
	// 					} else if (
	// 						products.title.toLowerCase().includes(search.toLowerCase())
	// 					) {
	// 						return products;
	// 					}
	// 				})

	return (
		<>
			<Grid container justify="center" spacing={12}>
				{(loading ? Array.from(new Array(20)) : products).map((item, index) => (
					<Grid item xs={12} sm={6} md={4} lg={3}>
						<Card className={classes.root} key={index}>
							{item ? (
								<CardMedia
									className={classes.media}
									image={item.image}
									title={item.title}
								/>
							) : (
								<Skeleton variant="rectangular" width={310} height={300} />
							)}

							{item ? (
								<Box sx={{ pr: 2 }}>
									<CardContent>
										<div className={classes.cardContent}>
											<Typography gutterBottom component="h2">
												{item.title}
											</Typography>
											<Typography
												gutterBottom
												variant="h6"
												component="h2"
												style={{ color: "#d63031" }}
											>
												₹{item.price.toFixed(2)}
											</Typography>
										</div>
										<Rating
											name="half-rating-read"
											defaultValue={item.rating.rate}
											readOnly
										/>
									</CardContent>
									<CardActions disableSpacing className={classes.cardActions}>
										<Button
											component={Link}
											to="/checkout"
											variant="contained"
											style={{ backgroundColor: "#576574", color: "white" }}
										>
											BUY NOW
										</Button>

										<IconButton
											aria-label="add to shopping cart"
											style={{ color: "green" }}
											onClick={() => addToCart(item)}
										>
											<AddShoppingCartIcon onClick={handleClick} />
											<Snackbar
												open={open}
												autoHideDuration={1000}
												onClose={handleClose}
											>
												<Alert
													onClose={handleClose}
													severity="success"
													xs={{ width: "100%" }}
												>
													Added to Cart Successfully!
												</Alert>
											</Snackbar>
										</IconButton>
									</CardActions>
								</Box>
							) : (
								<Box sx={{ pt: 0.5 }}>
									<Skeleton />
									<Skeleton width="80%" />
								</Box>
							)}
						</Card>
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default ProductsData;
