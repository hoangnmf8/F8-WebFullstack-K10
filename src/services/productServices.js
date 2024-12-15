import instance from ".";

export const getAllProducts = async () => {
	const { data } = await instance.get("/products");
	return data;
};

export const createProduct = async (product) => {
	const { data } = await instance.post("/products", product);
	return data;
};
