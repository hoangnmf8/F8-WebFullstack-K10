import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
	const { id } = useParams();
	useEffect(() => {
		fetch(`https://dummyjson.com/products/${id}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	}, []);
	return <div>ProductDetailPage</div>;
};

export default ProductDetailPage;
