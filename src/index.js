import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import productPageReducer from './redux/productPageReducer';
import catalogPageReducer from './redux/catalogPageReducer';
import homePageReducer from './redux/homePageReducer';



let combinedReducers = combineReducers({
    productPage: productPageReducer,
    catalogPage: catalogPageReducer,
    homePage: homePageReducer,
});

let store = createStore(combinedReducers);

const rerenderPage = (store) => {
    ReactDOM.render(
        <Provider store={ store }>
                 <App />    
        </Provider>, 
             document.getElementById('root'));
      
    };
    // debugger  
rerenderPage(store);





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
