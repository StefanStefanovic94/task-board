import { combineReducers } from 'redux';
import issueReducer from './Issues/issueReducer';
import userReducer from './Users/userReducer';
import listColumnReducer from './Columns/columnReducer';

export default combineReducers({
  issues: issueReducer,
  users: userReducer,
  listColumn: listColumnReducer,
});
