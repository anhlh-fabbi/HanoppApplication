import {createStore, applyMiddleware} from 'redux';
import reducer from './allReducers';
import createSagaMiddleware from 'redux-saga';
// import logger from 'redux-logger';
import saga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
let store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);
export {store};
