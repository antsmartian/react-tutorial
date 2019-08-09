import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'components/App';
import GlobalStyles from 'styles/global'


ReactDOM.render(
		<div>
			<GlobalStyles />
			<App />
		</div>
	, document.getElementById('root'));
