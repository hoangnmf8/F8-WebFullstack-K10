import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductForm from "./pages/admin/ProductForm";
import { ProductTable } from "./pages/admin/ProductTable";
import { ProductProvider } from "./contexts/ProductContext";

const App = () => {
	return (
		<>
			<ProductProvider>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/admin/products" element={<ProductTable />} />
					<Route path="/admin/products/add" element={<ProductForm />} />
					<Route path="/admin/products/update/:id" element={<ProductForm />} />
				</Routes>
			</ProductProvider>
		</>
	);
};

export default App;
