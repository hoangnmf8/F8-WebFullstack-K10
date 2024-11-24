import React, { useEffect, useState } from "react";

const Shop = () => {
	const [products, setProducts] = useState([]);
	const [limit, setLimit] = useState(10);
	const [skip, setSkip] = useState(0);
	useEffect(() => {
		fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
			.then((res) => res.json())
			.then(({ products }) => {
				console.log(products);
				setProducts(products);
			});
	}, [limit, skip]);

	const handleSelectLimit = (e) => {
		const selectedLimit = e.target.value;
		console.log(selectedLimit);
		if (selectedLimit === "all") {
			console.log("get All");
		} else {
			setLimit(selectedLimit);
		}
	};
	return (
		<div>
			<h2>Danh sach san pham</h2>
			<select onChange={(e) => handleSelectLimit(e)}>
				<option value={10}>Hiển thị 10 sản phẩm</option>
				<option value={20}>Hiển thị 20 sản phẩm</option>
				<option value={30}>Hiển thị 30 sản phẩm</option>
				<option value="all">Hiển thị tất cả sản phẩm</option>
			</select>
			{products.map((item) => (
				<div key={item.id}>
					<img src={item.thumbnail} alt={item.title} />
					<span>{item.id}</span>
					<h3>{item.title}</h3>
					<p>Giá: {item.price}</p>
					<a href="" className="btn btn-danger">
						Xem chi tiết
					</a>
				</div>
			))}
			{/* nut bam phan trang */}
		</div>
	);
};

export default Shop;
