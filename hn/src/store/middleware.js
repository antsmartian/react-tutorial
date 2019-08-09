import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { createLogger } from 'redux-logger';
const middlewareList = [];

middlewareList.push(thunk);

const isProd = process.env.NODE_ENV === "production";

if(!isProd) {
	middlewareList.push(createLogger())
}

const middleware = compose(applyMiddleware(...middlewareList))

export default middleware;