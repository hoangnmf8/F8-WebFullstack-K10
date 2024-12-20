import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect } from "react";
import { fetchProducts, removeProduct } from "../../features/products/productActions";

const ProductTable = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { products, loading, error } = useSelector((state: RootState) => state.products);

	useEffect(() => {
		dispatch(fetchProducts());
	}, []);

	const handleRemove = (id: number) => {
		confirm("Chac chua?") && dispatch(removeProduct(id));
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>{error}</p>;
	return (
		<div>
			<h1>Quản trị sản phẩm</h1>
			<table className="table-bordered table-striped">
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
								<button
									className="btn btn-danger"
									onClick={() => {
										item.id && handleRemove(+item.id);
									}}
								>
									Remove
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ProductTable;
