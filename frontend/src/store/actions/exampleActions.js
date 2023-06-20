export const exampleAction = () => ({
    type: 'EXAMPLE_ACTION',
});

export const exampleActionSuccess = (data) => ({
    type: 'EXAMPLE_ACTION_SUCCESS',
    payload: data,
});

export const exampleActionError = (error) => ({
    type: 'EXAMPLE_ACTION_ERROR',
    payload: error,
});