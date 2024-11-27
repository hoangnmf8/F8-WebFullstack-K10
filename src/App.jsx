import { Route, Routes } from "react-router-dom";
import "./App.scss";

import Footer from "./components/footer/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import NotFoundPage from "./pages/NotFoundPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import ProductDetailPage from "./pages/ProductDetailPage";

/**
 * Các bước cấu hình react-router-dom
 * 1, Cài đặt: npm i react-router-dom
 * 2. Vào file main bọc App component trong BrowserRouter.
 * 3. Trong App thêm Routes và các tuyến đường (Route) như phía dưới.
 * 4. BrowserRouter, Routes, Route, Link, NotFoundPage, Dynamic Route,
 *
 */

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/shop" element={<ShopPage />} />
				<Route path="/products/:cousers/:comment" element={<ProductDetailPage />} />
				<Route path="/services" element={<ServicesPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
