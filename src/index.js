import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import combineReducers from './store/index';
import { rootSaga } from './sagas/saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga'
const SagaMiddleWare = createSagaMiddleWare()
const store = createStore(combineReducers, composeWithDevTools(applyMiddleware(SagaMiddleWare)));
SagaMiddleWare.run(rootSaga);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

