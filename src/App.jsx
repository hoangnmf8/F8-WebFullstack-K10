import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";
import Header from "./layout/header/Header";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
	return (
		<>
			<AuthProvider>
				<Header />
				<Routes>
					{/* Lien quan den Auth */}
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</AuthProvider>
		</>
	);
};

export default App;
