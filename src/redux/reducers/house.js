import { GET_HOUSE } from '../actions';

const initialState = [];

const houseReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOUSE:
      return action.payload;
    default:
      return state;
  }
};

export default houseReducer;
