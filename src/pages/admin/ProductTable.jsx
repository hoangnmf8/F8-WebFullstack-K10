import React from "react";

const ProductTable = ({ products }) => {
	console.log(products);
	const handleRemove = (id) => {
		console.log(id);
	};
	return (
		<div>
			<div>
				<h1>Quản lý sản phẩm</h1>
				<button className="btn btn-primary">Add new product</button>
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
						{products.map((item) => (
							<tr key={item.id}>
								<td>{item.id}</td>
								<td>{item.title}</td>
								<td>{item.price}</td>
								<td>{item.description}</td>
								<td>
									<button className="btn btn-danger" onClick={() => handleRemove(item.id)}>
										Remove
									</button>
									<button className="btn btn-warning">Update</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ProductTable;
