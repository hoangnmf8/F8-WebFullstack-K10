import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { create, getById } from "../../axios";
import { updateById } from "../../axios/index";

const ProductForm = () => {
	const { id } = useParams();
	const nav = useNavigate();
	const initValue = {
		title: "",
		price: 0,
	};
	const [product, setProduct] = useState(initValue);

	id &&
		useEffect(() => {
			(async () => {
				const data = await getById("/products", id);
				setProduct(data);
			})();
		}, [id]);

	// Cập nhật state
	const handleChange = (e) => {
		const { name, value } = e.target;
		setProduct((prev) => ({ ...prev, [name]: value }));
	};

	// Gửi dữ liệu đi
	const handleSubmit = (e) => {
		e.preventDefault();
		(async () => {
			if (id) {
				// logic update
				const data = await updateById("/products", id, product);
			} else {
				// logic add
				const data = await create("/products", product);
			}

			window.confirm("Go back ProductTable page?") && nav("/admin/products");

			// logic chung
		})();
	};
	return (
		<div>
			<h1>{id ? "Cập nhật" : "Thêm mới"} sản phẩm</h1>
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
						// defaultValue={product.title}
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
						// defaultValue={parseFloat(product.price)}
						value={product.price}
						onChange={handleChange}
					/>
				</div>

				<div className="form-group">
					<button className="btn btn btn-primary w-100" onClick={handleSubmit}>
						{id ? "Cập nhật" : "Thêm mới"}
					</button>
				</div>
			</form>
		</div>
	);
};

export default ProductForm;
