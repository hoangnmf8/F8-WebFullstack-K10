import React from "react";
import { Outlet } from "react-router-dom";

const Dashboard = ({ products }) => {
	console.log(products);
	const handleRemove = (id) => {
		console.log(id);
	};
	return (
		<div>
			<h1>Doanh thu tuan nay</h1>
			<table>
				<thead>
					<tr>
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
								<button onClick={() => handleRemove(item.id)}>Remove</button>
								<button>Update</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<Outlet />
		</div>
	);
};

export default Dashboard;
