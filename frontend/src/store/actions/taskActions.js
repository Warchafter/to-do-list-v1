import * as actionTypes from './actionTypes';

export const createTask = () => {
    return {
        type: actionTypes.CREATE_TASK
    };
};

export const createTaskStart = () => {
    return {
        type: actionTypes.CREATE_TASK_START
    };
};

export const createTaskSuccess = (data) => {
    return {
        type: actionTypes.CREATE_TASK_SUCCESS,
        payload: data
    };
};

export const createTaskFail = (error) => {
    return {
        type: actionTypes.CREATE_TASK_FAIL,
        payload: error
    };
};

export const deleteTask = () => {
    return {
        type: actionTypes.DELETE_TASK,
    };
};

export const deleteTaskStart = () => {
    return {
        type: actionTypes.DELETE_TASK_START,
    };
};

export const deleteTaskSuccess = (data) => {
    return {
        type: actionTypes.DELETE_TASK_SUCCESS,
        payload: data
    };
};

export const deleteTaskFail = (error) => {
    return {
        type: actionTypes.DELETE_TASK_FAIL,
        payload: error
    };
};

export const fetchTaskList = () => {
    return {
        type: actionTypes.FETCH_TASK_LIST,
    };
};

export const fetchTaskListStart = () => {
    return {
        type: actionTypes.FETCH_TASK_LIST_START,
    };
};

export const fetchTaskListSuccess = (data) => {
    return {
        type: actionTypes.FETCH_TASK_LIST_SUCCESS,
        payload: data
    };
};

export const fetchTaskListFail = (error) => {
    return {
        type: actionTypes.FETCH_TASK_LIST_FAIL,
        payload: error
    };
};

export const modifyTaskList = () => {
    return {
        type: actionTypes.MODIFY_TASK_LIST,
    };
};

export const modifyTaskListStart = () => {
    return {
        type: actionTypes.MODIFY_TASK_LIST_START,
    };
};

export const modifyTaskListSuccess = (data) => {
    return {
        type: actionTypes.MODIFY_TASK_LIST_SUCCESS,
        payload: data
    };
};

export const modifyTaskListFail = (error) => {
    return {
        type: actionTypes.MODIFY_TASK_LIST_FAIL,
        payload: error
    };
};

