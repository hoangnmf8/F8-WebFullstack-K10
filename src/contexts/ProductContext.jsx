import { createContext, useEffect, useReducer } from "react";
import { productReducer } from "../reducers/productReducer";
import instance from "../services";

export const ProductContext = createContext();

const products = [
	{
		id: 1,
		title: "Sanpham A",
		price: 200,
	},

	{
		id: 2,
		title: "Sanpham B",
		price: 200,
	},
];

const initialState = {
	products: [],
};

export const ProductProvider = ({ children }) => {
	const [state, dispatch] = useReducer(productReducer, initialState);
	useEffect(() => {
		(async () => {
			const { data } = await instance.get("/products");
			console.log(data);
			dispatch({ type: "SET_PRODUCTS", payload: data });
		})();
	}, []);
	return <ProductContext.Provider value={{ state, dispatch }}>{children}</ProductContext.Provider>;
};
