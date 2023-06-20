import { combineReducers } from 'redux';

// Import your reducers
import exampleReducer from './exampleReducer';

// Combine your reducers into a root reducer
const rootReducer = combineReducers({
  // Add your reducers here
  example: exampleReducer,
});

export default rootReducer;