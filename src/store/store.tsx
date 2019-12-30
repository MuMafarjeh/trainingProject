import { createStore, applyMiddleware, combineReducers } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../enhancedTable/sagas/index'
import reducerCreated from '../enhancedTable/duck/reducer/index';
const sagaMiddlewhare = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddlewhare);

const rootReducer = combineReducers({
    data: reducerCreated,
   //  dataReducer:reducerCreated
})

const store = createStore(rootReducer, middleware);
 sagaMiddlewhare.run(rootSaga);
export default store;