import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Header = () => {
	const user = useContext(AuthContext);
	console.log(user);
	return (
		<header>
			<div className="logo">
				<img src="" alt="logo" />
			</div>
			<nav>
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/categories">Category</NavLink>
					</li>
					<li>
						<NavLink to="/services">Services</NavLink>
					</li>

					{user.email ? (
						<li>
							<button to="/logout">Logout</button>
						</li>
					) : (
						<li>
							<NavLink to="/login">Login</NavLink>
						</li>
					)}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
