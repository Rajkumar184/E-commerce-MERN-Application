import React from "react";
import "./HeaderCarsoule.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";

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
				<div className="">
					<img
						src="https://source.unsplash.com/random?clothes"
						className="sliderimg"
						alt=""
					/>
					<div className="carousel-caption  d-md-block ">
						<h1>Best Products waiting for you</h1>
						<Link
							to="/product"
							type="button"
							className="btn btn-outline-danger text-white px-5 py-2"
						>
							view
						</Link>
					</div>
				</div>
				<div className="">
					<img
						src="https://source.unsplash.com/random?shoes"
						className="sliderimg"
						alt=""
					/>
					<div className="carousel-caption  d-md-block ">
						<h1>Best Products waiting for you</h1>
						<Link
							to="/product"
							type="button"
							className="btn btn-outline-danger text-white px-5 py-2"
						>
							view
						</Link>
					</div>
				</div>
				<div className="">
					<img
						src="https://source.unsplash.com/random?gadgets"
						className="sliderimg"
						alt=""
					/>
					<div className="carousel-caption  d-md-block ">
						<h1>Best Products waiting for you</h1>
						<Link
							to="/product"
							type="button"
							className="btn btn-outline-danger text-white px-5 py-2"
						>
							view
						</Link>
					</div>
				</div>
				<div className="">
					<img
						src="https://source.unsplash.com/random?online-shopping"
						className="sliderimg"
						alt=""
					/>
					<div className="carousel-caption  d-md-block ">
						<h1>Best Products waiting for you</h1>
						<Link
							to="/product"
							type="button"
							className="btn btn-outline-danger text-white px-5 py-2"
						>
							view
						</Link>
					</div>
				</div>
			</AliceCarousel>
		</div>
	);
}
