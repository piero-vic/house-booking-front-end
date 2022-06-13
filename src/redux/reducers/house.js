import { NEW_HOUSE } from '../actions';

const initialState = [];

const houseReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_HOUSE:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default houseReducer;
