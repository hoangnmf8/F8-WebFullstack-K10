import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ShopPage = () => {
	const [products, setProducts] = useState([]);
	const [limit, setLimit] = useState(10);
	const [skip, setSkip] = useState(0);
	const [page, setPage] = useState(1);
	const initUrl = `https://dummyjson.com/products`;
	const [url, setUrl] = useState(initUrl);
	const [searchValue, setSearchValue] = useState("");

	if (searchValue !== "") {
	}
	useEffect(() => {
		fetch(searchValue === "" ? url : `https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
			.then((res) => res.json())
			.then(({ products }) => {
				console.log(products);
				setProducts(products);
			});
	}, [limit, skip]);

	// `https://dummyjson.com/products?limit=${limit}&skip=${skip}

	const handleSelectLimit = (e) => {
		const selectedLimit = e.target.value;
		console.log(selectedLimit);
		setLimit(selectedLimit);
	};

	const handlePrev = () => {
		setSkip();
	};

	const handleNext = () => {
		setSkip();
	};

	const handleSearch = (e) => {
		setSearchValue(e.target.value);
		setUrl(`https://dummyjson.com/products/search?q=${searchValue}`);
	};

	return (
		<div>
			<h2>Danh sach san pham</h2>
			<input type="text" onChange={(e) => handleSearch(e)} />
			<select onChange={(e) => handleSelectLimit(e)}>
				<option value={10}>Hiển thị 10 sản phẩm</option>
				<option value={20}>Hiển thị 20 sản phẩm</option>
				<option value={30}>Hiển thị 30 sản phẩm</option>
				<option value="all">Hiển thị tất cả sản phẩm</option>
			</select>
			{products.map((item) => (
				<div key={item.id}>
					<Link to={`/products/${item.id}`}>
						<img src={item.thumbnail} alt={item.title} />
					</Link>
					<span>{item.id}</span>
					<Link to={`/products/${item.id}`}>
						<h3>{item.title}</h3>
					</Link>
					<p>Giá: {item.price}</p>
					<Link to={`/products/${item.id}`} className="btn btn-danger">
						Xem chi tiết
					</Link>
				</div>
			))}
			{/* nut bam phan trang */}
			<button className="btn btn-primary" onClick={handlePrev}>
				Prev
			</button>
			<button className="btn btn-primary" onClick={handleNext}>
				Next
			</button>
		</div>
	);
};

export default ShopPage;

// SKU = Stock Keeping Unit
