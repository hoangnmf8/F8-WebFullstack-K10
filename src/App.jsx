import styles from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";

function Welcome(props) {
	// props = propeties
	// console.log(styles);
	return <h1 style={{ backgroundColor: "red", color: "white" }}>Hello {props.name}</h1>;
}

function App() {
	const username = "hoangnm";
	return (
		<>
			<Header />
			<Welcome name={username} />
			<Welcome name="Huy" />
			<button id={styles.btn}>Sign In</button>
			<Welcome name="Giang" />
			<Footer />
		</>
	);
}

export default App;
