import { combineReducers } from 'redux';
import todos from './todos';
import user from './user';

const rootReducer = combineReducers({
  todos,
  user,
});

export default rootReducer;
