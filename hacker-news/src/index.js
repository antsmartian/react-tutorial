import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import rootReducer from './rootReducer'
import Product from './product'


// rootreducer thunk
const store = createStore(
  rootReducer,applyMiddleware(thunk) 
)

function App() {
  return (
      <div>
        <Product />
      </div>
    )
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
)