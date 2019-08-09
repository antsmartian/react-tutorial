import {
	FETCH_PRODUCT_BEGIN,
	FETCH_PRODUCT_SUCCESS,
	FETCH_PRODUCTS_FAILURE
} from "./productActions";

const initialState = {
	items: [],
	loading: false, 
	error: null
}


export default function productReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_PRODUCT_BEGIN:

			return {
				...state, 
				loading: true,
				error: null
			}

		case FETCH_PRODUCTS_FAILURE:

			return {
				...state, 
				loading: false,
				items: [],
				error: action.payload.error
			}

		case FETCH_PRODUCT_SUCCESS:

			return {
				...state, 
				loading: false,
				items: action.payload.products
			}

		default:
			return state;	
	}
}