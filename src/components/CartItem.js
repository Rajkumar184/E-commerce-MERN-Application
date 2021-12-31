import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { makeStyles } from "@mui/styles";
import GlobalContext from "../context/GlobalContext";

const useStyles = makeStyles({
	root: {
		width: "100%",
	},
	media: {
		height: "0%",
		paddingTop: "100%",
	},
	cardContent: {
		display: "flex",
		justifyContent: "space-between",
	},
	cardActions: {
		display: "flex",
		justifyContent: "space-around",
	},
	buttons: {
		display: "flex",
		alignItems: "center",
	},
});

const CartItem = ({ cartItems }) => {
	const classes = useStyles();
	const { removeItem } = useContext(GlobalContext);

	return (
		<Grid container spacing={3}>
			{cartItems.map((item) => (
				<Grid item xs={12} sm={4} key={item.id}>
					<Card className={classes.root}>
						<CardMedia
							image={item.image}
							alt={item.name}
							className={classes.media}
						/>
						<CardContent className={classes.cardContent}>
							<Typography gutterBottom component="h2">
								{item.title}
							</Typography>
							<Typography
								gutterBottom
								variant="h6"
								component="h2"
								style={{ color: "#d63031" }}
							>
								{/* <span>₹ {item.price.split(".")[0]}</span> */}₹
								{item.price.toFixed(2)}
							</Typography>
						</CardContent>
						<CardActions className={classes.cardActions}>
							<div className={classes.buttons}>
								{/* <Button
									type="button"
									size="small"
									onClick={() => decrement(item.id)}
								>
									-
								</Button> */}
								{/* <Typography>{item}</Typography> */}
								{/* <Button
									type="button"
									size="small"
									onClick={() => increment(item.id)}
								>
									+
								</Button> */}
							</div>
							<Button
								variant="contained"
								type="button"
								color="secondary"
								onClick={() => removeItem(item.id)}
							>
								Remove
							</Button>
						</CardActions>
					</Card>
				</Grid>
			))}
		</Grid>
	);
};

export default CartItem;
