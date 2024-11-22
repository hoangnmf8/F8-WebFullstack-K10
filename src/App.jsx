import styles from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";

function Button(props) {
	console.log(props);
	return <button className={props.variant}>{props.children}</button>;
}

function App() {
	return (
		<>
			<Header />
			<Button variant="btn btn-primary">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, deserunt!</p>
			</Button>
			<Button variant="btn btn-secondary">Btn Secondary</Button>
			<Button variant="btn btn-warning">Btn Warning</Button>
			<Button variant="btn btn-danger">Btn Danger</Button>
			<Button variant="btn btn-link">Btn Link</Button>
			<Footer />
		</>
	);
}

export default App;
