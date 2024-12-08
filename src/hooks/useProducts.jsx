import { useEffect, useReducer } from "react";
import { createNew, getAll, removeById, updateById } from "../services/crudServices";
import { initialState, productReducer } from "../reducers/productReducer";

const useProducts = () => {
	const [state, dispatch] = useReducer(productReducer, initialState);
	useEffect(() => {
		async function fetchProducts() {
			const data = await getAll("/products");
			dispatch({ type: "SET_PRODUCTS", payload: data });
		}
		fetchProducts();
	}, [dispatch]);

	const createProduct = async (dataProduct) => {
		const data = await createNew("/products", dataProduct);
		dispatch({ type: "ADD_PRODUCT", payload: data });
	};

	const removeProduct = async (id) => {
		if (confirm("Are you sure?")) {
			await removeById("/products", id);
			dispatch({ type: "REMOVE_PRODUCT", payload: id });
		}
	};
	const updateProduct = async (id, product) => {
		const data = await updateById("/products", id, product);
		console.log(data);
		dispatch({ type: "UPDATE_PRODUCT", payload: data });
	};
	return {
		products: state.products,
		createProduct,
		removeProduct,
		updateProduct,
	};
};

export default useProducts;
