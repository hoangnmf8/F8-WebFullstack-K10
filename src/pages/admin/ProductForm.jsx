import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { createNew, getById, updateById } from "../../axios";

const ProductForm = () => {
	const { id } = useParams();
	const {
		register,
		watch,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm();

	id &&
		useEffect(() => {
			(async () => {
				const data = await getById("/products", id);
				reset(data);
			})();
		}, [id]);

	const handleAddProduct = async (product) => {
		console.log(product);
		// request add product
		if (id) {
			// logic edit
			const data = await updateById("/products", id, product);
			console.log(data);
		} else {
			// logic add
			const data = await createNew("/products", product);
			console.log(data);
		}
		reset();
	};

	return (
		<div>
			<h1>{id ? "Cập nhật" : "Thêm mới"} sản phẩm</h1>
			<form onSubmit={handleSubmit(handleAddProduct)}>
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
						{...register("title", { required: true })}
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
						{...register("price", { required: true })}
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
