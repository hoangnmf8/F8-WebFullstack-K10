import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProducts } from "../../services/productServices";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
	return await getAllProducts();
});
