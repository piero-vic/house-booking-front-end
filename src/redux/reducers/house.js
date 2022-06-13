import { NEW_HOUSE, GET_HOUSE } from '../actions';

const initialState = [];

const houseReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_HOUSE:
      return [...state, action.payload];
    case GET_HOUSE:
      return action.payload;
    default:
      return state;
  }
};

export default houseReducer;
