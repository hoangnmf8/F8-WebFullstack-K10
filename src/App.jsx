import { useEffect, useState } from "react";
import "./App.scss";

import Footer from "./components/footer/Footer";
import Header from "./components/Header";

/**
 * 1. useEffect có dependences là mảng rỗng: callback chỉ gọi 1 lần ngay sau lần render đầu tiên.
 * 2. useEffect có dependences khác mảng rỗng: callback gọi 1 lần ngay sau lần render đầu tiên & được gọi khi sự phụ thuộc thay đổi.
 * 3. useEffect không có dependences: callback được gọi 1 lần sau lần render đầu tiên và sau mỗi lần re-render.
 *
 */

function ProductList() {
	useEffect(() => {
		console.log("trong useEffect");
		return () => {
			console.log("trong return cua useEffect");
			// function dọn dẹp ngay trước khi component ProductList được unmounting
		};
	}, []);
	return <h1>Danh sach san pham</h1>;
}

function App() {
	const [count, setCount] = useState(0);
	const [showProducts, setShowProducts] = useState(false);

	// useEffect(() => {
	// 	console.log("trong useEffect");
	// 	return () => {
	// 		console.log("trong return của useEffect");
	// 	};
	// }, [count]);

	// console.log("trong App");

	return (
		<>
			<Header />
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				Tăng
			</button>
			{count}

			<button
				onClick={() => {
					setShowProducts(!showProducts);
				}}
			>
				Toogle Products
			</button>

			{showProducts && <ProductList />}
			<Footer />
		</>
	);
}

export default App;
