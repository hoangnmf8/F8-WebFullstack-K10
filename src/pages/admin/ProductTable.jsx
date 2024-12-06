import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { removeById } from "../../services/crudServices";
import { ProductContext } from "../../contexts/ProductContext";

export const ProductTable = () => {
	const { state, dispatch } = useContext(ProductContext);

	return (
		<div>
			<div>
				<h1>Quản lý sản phẩm</h1>
				<Link to={`/admin/products/add`} className="btn btn-primary">
					Add new product
				</Link>
				<table className="table table-bordered table-striped">
					<thead>
						<tr className="text-center">
							<th>ID</th>
							<th>Title</th>
							<th>Price</th>
							<th>Description</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{state.products.map((item) => (
							<tr key={item.id}>
								<td>{item.id}</td>
								<td>{item.title}</td>
								<td>{item.price}</td>
								<td>{item.description}</td>
								<td>
									{/* <button className="btn btn-danger" onClick={() => handleRemoveProduct(item.id)}>
										Remove
									</button> */}
									<Link to={`/admin/products/update/${item.id}`} className="btn btn-warning">
										Update
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};
