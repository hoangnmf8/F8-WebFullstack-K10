export const initialState = {
	products: [],
};

export const productReducer = (action, state) => {
	switch (action.type) {
		case "SET_PRODUCTS": {
			return {
				...state,
				products: action.payload,
			};
		}
		case "ADD_PRODUCT": {
			return {
				...state,
				products: [...products, action.payload],
			};
		}
		case "REMOVE_PRODUCT": {
			return {
				...state,
				products: state.products.filter((item) => item.id !== action.payload),
			};
		}
		default:
			return state;
	}
};
