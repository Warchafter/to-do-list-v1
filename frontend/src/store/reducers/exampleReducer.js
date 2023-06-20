const initialState = {
// Initial state for the example
    data: null,
    loading: false,
    error: null,
};

const exampleReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EXAMPLE_ACTION':
        return {
            ...state,
            loading: true,
        };
        case 'EXAMPLE_ACTION_SUCCESS':
        return {
            ...state,
            data: action.payload,
            loading: false,
            error: null,
        };
        case 'EXAMPLE_ACTION_ERROR':
        return {
            ...state,
            data: null,
            loading: false,
            error: action.payload,
        };
        default:
        return state;
    }
};

export default exampleReducer;