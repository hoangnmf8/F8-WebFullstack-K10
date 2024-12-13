import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./actions/countActions";

const App = () => {
	const { count } = useSelector((state) => state.dem);
	const dispatch = useDispatch();
	return (
		<>
			<h1>Count: {count}</h1>
			<button className="btn btn-primary" onClick={() => dispatch(increment())}>
				Increment
			</button>

			<button className="btn btn-primary" onClick={() => dispatch(decrement())}>
				Decrement
			</button>
		</>
	);
};

export default App;
