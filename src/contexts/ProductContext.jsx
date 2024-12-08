import { createContext, useEffect, useReducer } from "react";
import { initialState, productReducer } from "../reducers/productReducer";
import { getAll } from "../services/crudServices";

export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
	const [state, dispatch] = useReducer(productReducer, initialState);
	useEffect(() => {
		async function fetchProducts() {
			const data = await getAll("/products");
			dispatch({ type: "SET_PRODUCTS", payload: data });
		}
		fetchProducts();
	}, []);

	return <ProductContext.Provider value={{ state, dispatch }}>{children}</ProductContext.Provider>;
};
