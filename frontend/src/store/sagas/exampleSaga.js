import { takeLatest, put, delay } from 'redux-saga/effects';

function* exampleSagaWorker(action) {
    try {
        // Simulate an asynchronous operation
        yield delay(1000);

        // Dispatch a success action with the result
        yield put({ type: 'EXAMPLE_ACTION_SUCCESS', payload: 'Hello from Saga' });
    } catch (error) {
        // Dispatch an error action
        yield put({ type: 'EXAMPLE_ACTION_ERROR', payload: error.message });
    }
}

function* exampleSagaWatcher() {
    yield takeLatest('EXAMPLE_ACTION', exampleSagaWorker);
}

export default exampleSagaWatcher;