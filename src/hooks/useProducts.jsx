import { useEffect, useReducer } from "react";
import { createNew, getAll } from "../services/crudServices";
import { initialState, productReducer } from "../reducers/productReducer";

const useProducts = () => {
	const [state, dispatch] = useReducer(productReducer, initialState);
	useEffect(() => {
		async function fetchProducts() {
			const data = await getAll("/products");
			dispatch({ type: "SET_PRODUCTS", payload: data });
		}
		fetchProducts();
	}, []);

	const createProduct = async (dataProduct) => {
		const data = await createNew("/products", dataProduct);
		return data;
	};

	const removeProduct = async (dataProduct) => {};
	const updateProduct = async (dataProduct) => {};
	return {
		products: state.products,
		createProduct,
		removeProduct,
		updateProduct,
	};
};

export default useProducts;
