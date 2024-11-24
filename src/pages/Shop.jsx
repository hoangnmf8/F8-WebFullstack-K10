import React, { useEffect, useState } from "react";

const Shop = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch("https://dummyjson.com/products")
			.then((res) => res.json())
			.then(({ products }) => {
				console.log(products);
				setProducts(products);
			});
	}, []);
	return (
		<div>
			<h2>Danh sach san pham</h2>
			{products.map((item) => (
				<div key={item.id}>
					<h3>{item.title}</h3>
					<p>Giá: {item.price}</p>
				</div>
			))}
		</div>
	);
};

export default Shop;
