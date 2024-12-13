import { SET_PRODUCTS } from "../actions/productActions";

const initialState = {
	products: [],
};
export const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_PRODUCTS:
			return {};

		default:
			return state;
	}
};
