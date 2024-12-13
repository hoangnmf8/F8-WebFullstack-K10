import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { countReducer } from "./countReducer";

const rootReducer = combineReducers({
	products: productReducer,
	dem: countReducer,
});

export default rootReducer;
