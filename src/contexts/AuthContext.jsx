import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const user = JSON.parse(localStorage.getItem("user") || "{}");
	console.log(user);
	return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
