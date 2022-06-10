import { GET_MY_RESERVATIONS } from '../actions';

const initialState = [];

const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_RESERVATIONS:
      return action.payload;
    // case ADD_NEW_RESERVATION:
    //   return action.payload;
    default:
      return state;
  }
};

export default reservationsReducer;
