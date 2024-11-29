import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import CategoryPage from "./pages/CategoryPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ServicesPage from "./pages/ServicesPage";
import ProductDetail from "./pages/ProductDetail";
import Dashboard from "./pages/admin/Dashboard";
import ProductTable from "./pages/admin/ProductTable";
import ProductForm from "./pages/admin/ProductForm";

const App = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		(async () => {
			const res = await fetch("http://localhost:3000/products");
			const data = await res.json();
			console.log(data);
			setProducts(data);
		})();
	}, []);
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage products={products} />} />
				<Route path="/services" element={<ServicesPage />} />
				<Route path="/categories" element={<CategoryPage />} />
				<Route path="/products/:id" element={<ProductDetail />} />

				<Route path="/admin" element={<Dashboard products={products} />}>
					<Route path="products" element={<ProductTable />} />
					{/* /admin/products */}
					<Route path="products/add" element={<ProductForm />} />
					{/* /admin/products/add */}
				</Route>
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
