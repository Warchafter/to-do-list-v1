import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './store/reducers/index';
import rootSaga from './store/sagas/index';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the Redux store with the root reducer and saga middleware
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Run the root saga
sagaMiddleware.run(rootSaga);

export default store;