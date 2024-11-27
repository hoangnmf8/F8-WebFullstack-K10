import { Route, Routes } from "react-router-dom";
import "./App.scss";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import NotFoundPage from "./pages/NotFoundPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import DashBoardPage from "./pages/admin/DashBoardPage";
import ProductsList from "./pages/admin/ProductsList";

/**
 * Các bước cấu hình react-router-dom
 * 1, Cài đặt: npm i react-router-dom
 * 2. Vào file main bọc App component trong BrowserRouter.
 * 3. Trong App thêm Routes và các tuyến đường (Route) như phía dưới.
 * 4. BrowserRouter, Routes, Route, Link, NotFoundPage, Dynamic Route, useParams
 *
 */

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/shop" element={<ShopPage />} />
				{/* <Route path="/products/laptop" element={<LaptopPage />} />
				<Route path="/products/desktop" element={<DesktopPage />} /> */}
				<Route path="/products/:id" element={<ProductDetailPage />} />
				<Route path="/services" element={<ServicesPage />} />
				<Route path="/contact" element={<ContactPage />} />

				{/* <Route path="/admin" element={<DashBoardPage />} /> */}
				{/* <Route path="/admin/products" element={<ProductsList />} /> */}

				<Route path="/admin" element={<DashBoardPage />}>
					<Route path="/admin/products" element={<ProductsList />} />
				</Route>

				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
