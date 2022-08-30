import todoReducer from './todos/todoReducer';
import filterReducer from './filters/filterReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer
});
export default rootReducer;