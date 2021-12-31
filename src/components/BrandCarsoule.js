import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import AliceCarousel from "react-alice-carousel";
import CustomLoader from "../components/CustomLoader";

const BrandCarsoule = () => {
	const [loading, setLoading] = useState(false);

	const CollectionData = [
		{
			url: "images/brand1.png",
		},
		{
			url: "images/brand2.png",
		},
		{
			url: "images/brand3.png",
		},
		{
			url: "images/brand4.png",
		},
		{
			url: "images/brand5.png",
		},
		{
			url: "images/brand6.png",
		},
		{
			url: "images/brand7.png",
		},
		{
			url: "images/brand8.png",
		},
		{
			url: "images/brand9.png",
		},
	];

	const useStyles = makeStyles((theme) => ({
		TitleWrapper: {
			marginTop: "100px",
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
		carousel: {
			height: "10%",
			display: "flex",
			alignItems: "center",
		},
		carouselItem: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			cursor: "pointer",
			textTransform: "uppercase",
			color: "black",
		},
	}));

	const classes = useStyles();

	const items = CollectionData.map((val) => {
		const { url } = val;

		return (
			<>
				{loading ? (
					<CustomLoader />
				) : (
					<div>
						<img
							src={url}
							alt=""
							height="150"
							width="180"
							style={{ marginBottom: 10 }}
						/>
					</div>
				)}
			</>
		);
	});

	const responsive = {
		0: {
			items: 1,
		},
		512: {
			items: 4,
		},
	};

	return (
		<>
			<section>
				<div className={classes.TitleWrapper}>
					<h2 className={classes.Heading}>Shop By Brands</h2>
					<p className={classes.SubHeading}>
						Select from the premium product and save plenty money
					</p>
				</div>
				<div className={classes.carousel}>
					<AliceCarousel
						mouseTracking
						infinite
						autoPlayInterval={1000}
						animationDuration={1500}
						disableDotsControls
						responsive={responsive}
						items={items}
						autoPlay
					/>
				</div>
			</section>
		</>
	);
};

export default BrandCarsoule;
