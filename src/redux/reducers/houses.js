import { LOAD_HOUSES, NEW_HOUSE, DELETE_HOUSE } from '../actions';

const initialState = [];

const housesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_HOUSES:
      return action.payload;
    case NEW_HOUSE:
      return [...state, action.payload];
    case DELETE_HOUSE:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export default housesReducer;
