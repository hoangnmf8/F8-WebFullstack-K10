import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../services";
import { IProduct } from "../../interfaces/IProduct";

export const fetchProducts = createAsyncThunk<IProduct[]>("/products/fetchProducts", async () => {
	const { data } = await instance.get("/products");
	console.log(data);
	return data;
});

export const createProduct = createAsyncThunk<IProduct, IProduct>("/products/createProduct", async (product) => {
	const { data } = await instance.post("/products", product);
	return data;
});

export const editProduct = createAsyncThunk<IProduct, IProduct>("/products/editProduct", async ({ id, ...product }) => {
	const { data } = await instance.patch(`/products/${id}`, product);
	return data;
});

export const removeProduct = createAsyncThunk<number, number>("/products/removeProduct", async (id) => {
	await instance.delete(`/products/${id}`);
	return id;
});
