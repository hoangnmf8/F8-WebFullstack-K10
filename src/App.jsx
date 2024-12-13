import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./actions/countActions";

const App = () => {
	const count = useSelector((state) => state.count);
	const dispatch = useDispatch();
	const handleIncrement = () => {
		dispatch(increment());
	};

	const handleDecrement = () => {
		dispatch(decrement());
	};
	return (
		<>
			<h1>Count: {count}</h1>
			<button className="btn btn-primary" onClick={handleIncrement}>
				Increment
			</button>

			<button className="btn btn-primary" onClick={handleDecrement}>
				Decrement
			</button>
		</>
	);
};

export default App;
