import React from "react";
import "./HeaderCarsoule.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function HeaderCarsoule() {
	return (
		<div className="App-carsule">
			<AliceCarousel
				autoPlay
				mouseTracking
				infinite
				autoPlayInterval={1000}
				animationDuration={1500}
			>
				<img
					src="https://source.unsplash.com/random?clothes"
					className="sliderimg"
					alt=""
				/>
				<img
					src="https://source.unsplash.com/random?shoes"
					className="sliderimg"
					alt=""
				/>
				<img
					src="https://source.unsplash.com/random?gadgets"
					className="sliderimg"
					alt=""
				/>
				<img
					src="https://source.unsplash.com/random?online-shopping"
					className="sliderimg"
					alt=""
				/>
			</AliceCarousel>
		</div>
	);
}
