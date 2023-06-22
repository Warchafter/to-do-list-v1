import { put, select } from 'redux-saga/effects';
import axios from '../../axios-db';

import * as actions from '../actions/actionTypes';

// export function* createTaskSaga(action) {
//     yield put(actions.createTaskStart());
//     const access = yield localStorage.getItem('access');
//     const config = {
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     }
// }

// export function* createBillClientSubmissionSaga(action) {
//     yield put(actions.createBillClientSubmissionStart());
//     const access = yield localStorage.getItem('access');
//     const config = {
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `JWT ${access}`,
//             'Accept': 'application/json'
//         }
//     };
//     const body = JSON.stringify(action.formData);
//     const url = '/bill/bill-client-submissions/';
//     try {
//         let response = yield axios.post(url, body, config);
//         console.log(response);
//         yield put(actions.createBillClientSubmissionSuccess(response.data));
//         yield put(actions.enqueueSnackbar(getSnackbarData('La Solicitud fue enviada exitosamente!', 'success')));
//     } catch (error) {
//         yield put(actions.createBillClientSubmissionFail(error));
//         yield put(actions.enqueueSnackbar(getSnackbarData('No se pudo enviar la solicitud', 'error')));
//     };
// };
