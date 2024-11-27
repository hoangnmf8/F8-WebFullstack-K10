import { Link, NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
	return (
		<header>
			<div className="logo">
				<img src="" alt="Logo" />
			</div>
			<nav>
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/shop">Shop</NavLink>
					</li>
					<li>
						<NavLink to="/services">Services</NavLink>
					</li>
					<li>
						<NavLink to="/contact">Contact</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
