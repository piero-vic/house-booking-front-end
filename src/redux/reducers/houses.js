import { LOAD_HOUSES } from '../actions';

const initialState = [];

const HousesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_HOUSES:
      return action.payload;

    default:
      return state;
  }
};

export default HousesReducer;
