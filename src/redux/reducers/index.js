import { combineReducers } from 'redux';
import authReducer from './auth';
import reservationsReducer from './reservations';

const rootReducer = combineReducers({
  auth: authReducer,
  reservations: reservationsReducer,
});

export default rootReducer;
