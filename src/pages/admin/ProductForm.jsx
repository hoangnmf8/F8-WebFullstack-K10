import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductForm = () => {
	const nav = useNavigate();
	const [product, setProduct] = useState({
		title: "",
		price: 0,
	});

	// Cập nhật state
	const handleChange = (e) => {
		const { name, value } = e.target;
		setProduct((prev) => ({ ...prev, [name]: value }));
	};

	// Gửi dữ liệu đi
	const handleSubmit = (e) => {
		e.preventDefault();
		(async () => {
			try {
				const res = await fetch("http://localhost:3000/products", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(product),
				});

				const data = await res.json();
				console.log(data);

				// Thong bao them thanh cong.
				confirm("Them thanh cong, ban muon quay lai danh sach san pham khong?") && nav("/admin/products");

				// Cap nhat lai danh sach san pham neu nguoi dung quay lai danh sach san pham
				// Neu nguoi dung o lai ProductForm, sau khi submit thi phai reset form.
			} catch (error) {
				console.log(error);
			}
		})();
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
						defaultValue={product.title}
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
						defaultValue={product.price}
						onChange={handleChange}
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
