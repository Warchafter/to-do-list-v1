import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    taskList: null,
    error: null,
    loading: false,
};

const createTaskStart = (state, action) => {
    return updateObject(state, { error: null, loading: true });
};

const createTaskSuccess = (state, action) => {
    //Need to pass createdTask as a variable from wherever it's being called.
    const updatedTaskList = state.taskList.concat(action.createdTask);
    const updatedState = {
        taskList: updatedTaskList,
        error: null,
        loading: false
    }
    return updateObject(state, updatedState);
};

const createTaskFail = (state, action) => {
    return updateObject(state, {error: action.error, loading: false});
};

const deleteTaskStart = (state, action) => {
    return updateObject(state, { error: null, loading: true });
};

const deleteTaskSuccess = (state, action) => {
    const deletedTask = action.deletedMovie
    const index = state.taskList.finIndex((taskList) => taskList.id === deletedTask.id);
    const updatedTaskList = [...state.deletedTask];
    updatedTaskList[index] = deletedTask;
    const updatedState = {
        tasklist: updatedTaskList,
        error: null,
        loading: false
    };
    return updateObject(state, updatedState);
};

const deleteTaskFail = (state, action) => {
    return updateObject(state, { error: action.error, loading: false });
};

const fetchTaskListStart = (state, action) => {
    return updateObject(state, { error: null, loading: true });
};

const fetchTaskListSuccess = (state, action) => {
    return updateObject(state, {
        taskList: action.taskList,
        error: null,
        loading: false
    });
};

const fetchTaskListFail = (state, action) => {
    return updateObject(state, { error: action.error, loading: false });
};

const modifyTaskStart = (state, action) => {
    return updateObject(state, { error: null, loading: false });
};

const modifyTaskSuccess = (state, action) => {
    const modifiedTask = action.modifiedTask;
    const index = state.taskList.findIndex((task) => task.id ===modifiedTask.id);

    if(index !== -1) {
        const updatedTaskList = [...state.taskList];
        updatedTaskList[index] = modifiedTask;

        const updatedState = {
            taskList: updatedTaskList,
            error: null,
            loading: false
        };

        return updateObject(state, updatedState);
    };
    return state;
};

const modifyTaskFail = (state, action) => {
    return updateObject(state, { error: action.error, loading: false });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_TASK_START: return createTaskStart(state, action);
        case actionTypes.CREATE_TASK_SUCCESS: return createTaskSuccess(state, action);
        case actionTypes.CREATE_TASK_FAIL: return createTaskFail(state, action);
        case actionTypes.DELETE_TASK_START: return deleteTaskStart(state, action);
        case actionTypes.DELETE_TASK_SUCCESS: return deleteTaskSuccess(state, action);
        case actionTypes.DELETE_TASK_FAIL: return deleteTaskFail(state, action);
        case actionTypes.FETCH_TASK_LIST_START: return fetchTaskListStart(state, action);
        case actionTypes.FETCH_TASK_LIST_SUCCESS: return fetchTaskListSuccess(state, action);
        case actionTypes.FETCH_TASK_LIST_FAIL: return fetchTaskListFail(state, action);
        case actionTypes.MODIFY_TASK_START: return modifyTaskStart(state, action);
        case actionTypes.MODIFY_TASK_SUCCESS: return modifyTaskSuccess(state, action);
        case actionTypes.MODIFY_TASK_FAIL: return modifyTaskFail(state, action);
        default: return state;
    };
};

export default reducer;