export const FETCH_PRODUCT_BEGIN = "FETCH_PRODUCT_BEGIN";
export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";


function fakeAjaxCall() {
	return new Promise(resolve => {
		setTimeout(() => resolve(
				{
					products: [
						{
							id: 0,
							name: "Apple"
						}, 
						{
							id: 1, 
							name: "Samsung"
						}, 
						{
							id: 2,
							name: "Nokia"
						}
					]
				}
			), 2000)
	})
}

// thunk 
export function fetchProductsAPICall() {
	return dispatch => {
		dispatch(fetchProducts());
		return fakeAjaxCall()
				.then(json => {
					dispatch(fetchProductSuccess(json))
					return json.products;
				})
				.catch(error => dispatch(fetchProductError(error)))
	}
}



export const fetchProducts = () => ({
	type: FETCH_PRODUCT_BEGIN
})

export const fetchProductSuccess = products => ({
	type: FETCH_PRODUCT_SUCCESS,
	payload: { products }
})

export const fetchProductError = error => ({
	type: FETCH_PRODUCTS_FAILURE,
	payload: {error}
})