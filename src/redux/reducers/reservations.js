import { GET_MY_RESERVATIONS } from '../actions';

const initialState = [];

const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_RESERVATIONS:
      return action.payload;
    default:
      return state;
  }
};

export default reservationsReducer;
