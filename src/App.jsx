import { useEffect, useState } from "react";
import "./App.scss";

import Footer from "./components/footer/Footer";
import Header from "./components/Header";

/**
 * 1. useEffect có dependences là mảng rỗng
 *
 */

function ComponentA() {
	useEffect(() => {
		console.log("trong useEffect cua component A");
	});
	return <h2>Noi dung component A</h2>;
}

function App() {
	const [show, setShow] = useState(false);
	useEffect(() => {
		console.log("trong useEffect cua component App");
	}, [show]);
	return (
		<>
			<Header />
			<h1>Hello</h1>
			<button className="btn btn-primary" onClick={() => setShow(!show)}>
				Toggle
			</button>
			<Footer />
		</>
	);
}

export default App;
