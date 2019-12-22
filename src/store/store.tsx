import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../enhancedTable/duck/reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../enhancedTable/sagas/index'
const sagaMiddlewhare = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddlewhare);



const store = createStore(rootReducer, middleware);
 sagaMiddlewhare.run(rootSaga);
export default store;