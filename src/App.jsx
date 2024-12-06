import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";
import Header from "./layout/header/Header";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import RegisterPage from "./pages/RegisterPage";
import ProductTable from "./pages/admin/ProductTable";
import Dashboard from "./pages/admin/Dashboard";
import ProductForm from "./pages/admin/ProductForm";
import LayoutAdmin from "./layout/LayoutAdmin";

import ProductProvider from "./contexts/ProductContext";

const App = () => {
	return (
		<>
			<AuthProvider>
				<Header />
				<ProductProvider>
					<Routes>
						{/* Lien quan den Auth */}
						<Route path="/register" element={<RegisterPage />} />
						<Route path="/login" element={<LoginPage />} />

						{/* admin */}

						<Route path="/admin" element={<LayoutAdmin />}>
							<Route index element={<Dashboard />} />
							<Route path="products" element={<ProductTable />} />
							<Route path="products/add" element={<ProductForm />} />
							<Route path="products/update/:id" element={<ProductForm />} />
						</Route>

						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</ProductProvider>
			</AuthProvider>
		</>
	);
};

export default App;
