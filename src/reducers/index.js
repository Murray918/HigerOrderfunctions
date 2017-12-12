import { combineReducers } from 'redux';
import authenticationReducer from './authentication'
//this combines our authentication reducer
const rootReducer = combineReducers({
  authenticated: authenticationReducer
});

export default rootReducer;
