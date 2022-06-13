import { combineReducers } from 'redux';
import reservationsReducer from './reservations';
import authReducer from './auth';
import HousesReducer from './houses';
import HouseReducer from './house';

const rootReducer = combineReducers({
  auth: authReducer,
  HousesReducer,
  reservations: reservationsReducer,
  HouseReducer,
});

export default rootReducer;
