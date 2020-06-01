import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from "redux";
import reducer from './reducer';
import App from './components/app';
import { Provider } from 'react-redux';


const store = createStore(reducer);


ReactDom.render(
	<Provider store={store} >
		<App />
	</Provider>
	, document.getElementById('root'));


