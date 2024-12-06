import React from "react";
import { Outlet } from "react-router-dom";

const LayoutAdmin = () => {
	return (
		<>
			<h1>Hello Admin</h1>
			<Outlet />
		</>
	);
};

export default LayoutAdmin;
