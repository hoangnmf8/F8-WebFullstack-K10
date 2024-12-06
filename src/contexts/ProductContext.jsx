import { createContext } from "react";

export const ProductContext = createContext();

const products = [{ id: 1, title: "tivi", price: 1000 }];

const ProductProvider = ({ children }) => {
	return <ProductContext.Provider value={products}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
