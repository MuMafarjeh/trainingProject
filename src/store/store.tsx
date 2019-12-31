import { createStore, applyMiddleware, combineReducers } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
// import rootSaga from '../enhancedTable/sagas/index'
import rootReducer from './reducer'
import rootSaga from './rootSaga'
import { all } from '@redux-saga/core/effects';

const sagaMiddlewhare = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddlewhare);


const store = createStore(rootReducer, middleware);
sagaMiddlewhare.run(rootSaga);
export default store;