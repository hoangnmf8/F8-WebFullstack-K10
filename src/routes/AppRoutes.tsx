import { useRoutes } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import RegisterPage from "../pages/RegisterPage";
import LayoutAdmin from "../components/layouts/LayoutAdmin";
import ProductTable from "../pages/admin/ProductTable";
import ProductForm from "../pages/admin/ProductForm";
import LayoutClient from "../components/layouts/LayoutClient";

const AppRoutes = () => {
	const routes = [
		// Client Layout
		{
			path: "/",
			element: <LayoutClient />,
			children: [
				{ path: "", element: <HomePage /> },
				{ path: "/about", element: <AboutPage /> },
			],
		},

		// Empty layout
		{ path: "/register", element: <RegisterPage /> },
		{ path: "/login", element: <LoginPage /> },

		// Admin layout
		{
			path: "/admin",
			element: <LayoutAdmin />,
			children: [
				{ path: "products", element: <ProductTable /> },
				{ path: "products/add", element: <ProductForm /> },
				{ path: "products/update/:id", element: <ProductForm /> },
			],
		},
		{ path: "*", element: <NotFoundPage /> },
	];

	return useRoutes(routes);
};

export default AppRoutes;
