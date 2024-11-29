import React, { useState } from "react";

const ProductForm = () => {
	const [product, setProduct] = useState({
		title: "",
		price: 0,
	});

	const handleChange = () => {};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(111);
	};
	return (
		<div>
			<h1>Thêm mới sản phẩm</h1>
			<form action="">
				<div className="form-group">
					<label htmlFor="title" className="form-label">
						Title
					</label>
					<input
						className="form-control"
						type="text"
						name="title"
						id="price"
						placeholder="Title"
						value={product.title}
						onChange={handleChange}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="price" className="form-label">
						Price
					</label>
					<input
						className="form-control"
						type="number"
						name="price"
						id="price"
						placeholder="Price"
						value={product.price}
						onChange={handleChange()}
					/>
				</div>

				<div className="form-group">
					<button className="btn btn btn-primary w-100" onClick={handleSubmit}>
						Add Product
					</button>
				</div>
			</form>
		</div>
	);
};

export default ProductForm;
