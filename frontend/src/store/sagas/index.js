import { all } from 'redux-saga/effects';

// Import your sagas
import exampleSaga from './exampleSaga';

// Create the root saga
export default function* rootSaga() {
    yield all([
        // Add your sagas here
        exampleSaga(),
    ]);
}