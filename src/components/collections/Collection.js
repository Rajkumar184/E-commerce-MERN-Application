import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import CollectionData from "./CollectionData";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

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
		minWidth: 200,
	},

	title: {
		fontSize: 20,
		fontWeight: 500,
		marginLeft: 100,
		outline: "none",
	},
	pos: {
		transition: "all 300ms ease-in-out",
		textAlign: "center",
		border: "none",
		padding: "10px",
		backgroundColor: "#2f3542",
		marginLeft: 100,
		cursor: "pointer",
		fontWeight: 600,
		"&:hover": {
			cursor: "pointer",
			backgroundColor: "#747d8c",
			transform: "scale(1.2)",
		},
	},
	Info: {
		position: "absolute",
		marginTop: -200,

		justifyContet: "center",
	},

	media: {
		objectFit: "cover",
		height: "100%",
		width: "100%",
		transition: "all 500ms ease-in-out",

		"&:hover": {
			transform: "scale(1.2)",
		},
	},
});

export default function Collection() {
	const classes = useStyles();
	return (
		<section>
			<div className={classes.TitleWrapper}>
				<h2 className={classes.Heading}>Store Collections</h2>
				<p className={classes.SubHeading}>
					Select from the premium product and save plenty money
				</p>
			</div>
			<Grid
				container
				spacing={12}
				className={classes.gridContainer}
				justify="center"
			>
				{CollectionData.map((item, index) => (
					<Grid item xs={12} sm={6} md={4}>
						<Card className={classes.root} key={index} variant="outlined">
							<img className={classes.media} src={item.url} alt={item.label} />
							<CardContent className={classes.Info}>
								<Typography
									className={classes.title}
									color="textSecondary"
									gutterBottom
								>
									<Link
										to={item.path}
										style={{
											textDecoration: "none",
											color: "red",
										}}
									>
										{item.label}
									</Link>
								</Typography>
								<Button className={classes.pos} variant="contained">
									<Link
										className={classes.Link}
										to={item.path}
										style={{ textDecoration: "none", color: "#ffffff" }}
									>
										SHOP NOW
									</Link>
								</Button>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</section>
	);
}
