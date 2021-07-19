import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './store/reducer';
import { WatchAgeUp } from './sagas/saga'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga'
const SagaMiddleWare = createSagaMiddleWare()
const store = createStore(reducer, applyMiddleware(SagaMiddleWare));
SagaMiddleWare.run(WatchAgeUp);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

