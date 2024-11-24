import "./App.scss";

import Footer from "./components/footer/Footer";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Shop from "./pages/Shop";

function App() {
	return (
		<>
			<Header />
			<Wrapper>
				<Shop />
			</Wrapper>
			<Footer />
		</>
	);
}

export default App;
