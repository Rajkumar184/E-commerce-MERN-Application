import React, { useState, useEffect } from "react";
import ProductsData from "./ProductsData";
import SearchInput from "./SearchInput";

const MainProducts = (props) => {
	const [products, setProduct] = useState([]);
	const [loading, setLoading] = useState(false);
	const [search, setSearch] = useState("");

	const getData = async () => {
		try {
			const setHeader = {
				headers: {
					Accept: "application/json",
				},
			};
			setLoading(true);
			const res = await fetch(
				`https://fakestoreapi.com/products/?s=${search}`,
				setHeader
			);
			const data = await res.json();
			console.log(data);
			setProduct(data);
			setLoading(false);
		} catch (err) {
			// Handle Error Here
			console.error(err);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<section style={{ paddingTop: "60px", paddingBottom: "60px" }}>
				<SearchInput search={search} setSearch={setSearch} />
				<ProductsData search={search} products={products} loading={loading} />
			</section>
		</>
	);
};

export default MainProducts;
