import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'components/App';
import GlobalStyles from 'styles/global'
import { Provider } from 'react-redux';
import configureStore from 'store';



const store = configureStore({});

ReactDOM.render(
	<Provider store={store}>
		<div>
			<GlobalStyles />
			<App />
		</div>
	</Provider>	
	, document.getElementById('root'));
