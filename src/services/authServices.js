import instance from ".";

export const registerAccount = async (dataBody) => {
	try {
		const { data } = await instance.post("/register", dataBody);
		return data;
	} catch (error) {
		console.log(error);
	}
};
