import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './store/reducer';
import {combineReducers, createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import RootReducer from './store/reducers/RootReducer'
import thunk from 'redux-thunk'



const store = createStore(RootReducer, applyMiddleware(thunk));

console.log(store.getState())


ReactDOM.render(

        <Provider store={store}>
            <App />
        </Provider>,

    document.getElementById('base'));
//ok
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
