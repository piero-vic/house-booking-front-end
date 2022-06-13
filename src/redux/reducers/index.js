import { combineReducers } from 'redux';
import reservationsReducer from './reservations';
import authReducer from './auth';
import housesReducer from './houses';
import houseReducer from './house';

const rootReducer = combineReducers({
  auth: authReducer,
  houses: housesReducer,
  reservations: reservationsReducer,
  currentHouse: houseReducer,
});

export default rootReducer;
