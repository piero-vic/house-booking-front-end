import { combineReducers } from 'redux';
import authReducer from './auth';
import HousesReducer from './houses';

const rootReducer = combineReducers({
  auth: authReducer,
  HousesReducer,
});

export default rootReducer;
