import { createContext, useEffect, useReducer } from "react";
import { initialState, productReducer } from "../reducers/productReducer";
import { getAll } from "../services/crudServices";
import useProducts from "../hooks/useProducts";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
	const { products } = useProducts();
	return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>;
};
