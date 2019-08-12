import axios from 'axios';

const TIMEOUT = 2000000;
const HEADERS = {
	'Content-Type' : 'application/json',
	'Accept': 'application/json'
}

class ApiService {
	constructor({ baseURL, timout = TIMEOUT, headers = HEADERS, auth }) {
		const client = axios.create({
			baseURL, 
			timout, 
			headers, 
			auth
		})

		client.interceptors.response.use(this.handleSuccess, this.handleError)
		this.client = client;
	}

	handleSuccess(response) {
		return response;
	}

	handleError(error) {
		return Promise.reject(error);
	}

	get(path) {
		return this.client.get(path).then(response => response.data)
	}
}

export default ApiService;