import { createContext, useEffect, useState } from "react";
import { getAll } from "../services/crudServices";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		(async () => {
			const data = await getAll("/products");
			console.log(data);
			setProducts(data);
		})();
	}, []);
	return <ProductContext.Provider value={products}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
