import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import CardMedia from "@mui/material/CardMedia";

const useStyles = makeStyles({
	TitleWrapper: {
		textAlign: "center",
		marginBottom: "5rem",
	},
	Heading: {
		fontSize: "2rem",
		fontweight: "300",
		marginBottom: "1.5rem",
	},
	SubHeading: {
		color: "#636e72",
	},
	gridContainer: {
		paddingLeft: "40px",
		paddingRight: "40px",
	},

	root: {
		width: 320,
		height: 410,
		transition: "all 500ms ease-in-out",

		"&:hover": {
			transform: "scale(1.2)",
		},
	},

	cardContent: {
		display: "flex",
		justifyContent: "space-between",
	},

	media: {
		objectFit: "cover",
		height: 350,
		paddingTop: "80%",
	},
});

const NewProducts = () => {
	const [products, setProduct] = useState([]);

	useEffect(() => {
		const getData = async () => {
			try {
				const setHeader = {
					headers: {
						Accept: "application/json",
					},
				};
				const res = await fetch(
					`https://fakestoreapi.com/products?limit=9`,
					setHeader
				);
				const data = await res.json();
				console.log(data);
				setProduct(data);
			} catch (err) {
				// Handle Error Here
				console.error(err);
			}
		};

		getData();
	}, []);
	const classes = useStyles();
	return (
		<section style={{ paddingTop: "80px", paddingBottom: "50px" }}>
			<div className={classes.TitleWrapper}>
				<h2 className={classes.Heading}>New Products</h2>
				<p className={classes.SubHeading}>
					Select from the premium product and save plenty money
				</p>
			</div>
			<Grid
				Grid
				container
				className={classes.gridContainer}
				justify="center"
				spacing={12}
			>
				{products.map((item, index) => (
					<Grid item xs={12} sm={6} md={4}>
						<Card className={classes.root} key={index}>
							<CardMedia
								className={classes.media}
								image={item.image}
								title={item.title}
							/>
							<CardContent>
								<div className={classes.cardContent}>
									<Typography gutterBottom component="h2">
										{item.title}
									</Typography>
								</div>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</section>
	);
};

export default NewProducts;
