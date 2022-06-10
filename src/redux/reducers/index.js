import { combineReducers } from 'redux';
import reservationsReducer from './reservations';
import authReducer from './auth';
import HousesReducer from './houses';

const rootReducer = combineReducers({
  auth: authReducer,
  HousesReducer,
  reservations: reservationsReducer,
});

export default rootReducer;
