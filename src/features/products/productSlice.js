import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productActions";

const initialState = {
	products: [],
	loading: false,
	error: null,
};

const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.loading = false;
				state.products = action.payload;
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

const productReducer = productSlice.reducer;

export default productReducer;
