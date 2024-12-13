import React, { useContext } from "react";
import { ProductContext } from "./contexts/ProductContext";

const App = () => {
	const { state, dispatch } = useContext(ProductContext);

	return (
		<>
			<h1>Hello</h1>
			{JSON.stringify(state.products)}
		</>
	);
};

export default App;
