import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

const HomePage = () => {
	const { products } = useContext(ProductContext);
	return (
		<div>
			<h1>Home Page</h1>
			{JSON.stringify(products)}
		</div>
	);
};

export default HomePage;
