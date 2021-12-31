import React from "react";
import HeaderCarsoule from "../components/HeaderCarsoule";
import Collection from "../components/collections/Collection";
import NewProducts from "../components/NewProducts";
import BrandCarsoule from "../components/BrandCarsoule";

const Home = () => {
	return (
		<>
			<HeaderCarsoule />
			<Collection />
			<NewProducts />
			<BrandCarsoule />
		</>
	);
};

export default Home;
