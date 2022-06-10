import { combineReducers } from 'redux';
import authReducer from './auth';
import reservationsReducer from './reservations';
import HouseReducer from './house';

const rootReducer = combineReducers({
  auth: authReducer,
  reservations: reservationsReducer,
  HouseReducer,
});

export default rootReducer;
