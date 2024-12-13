import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { ProductProvider } from "./contexts/ProductContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<ProductProvider>
				<App />
			</ProductProvider>
		</BrowserRouter>
	</React.StrictMode>
);
