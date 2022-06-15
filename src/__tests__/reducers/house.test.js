import { GET_HOUSE } from '../../redux/actions';
import houseReducer from '../../redux/reducers/house';

describe('houseReducer', () => {
  test('Loads the house correctly', () => {
    const state = {};

    const data = { address: 'address1', city: 'Cairo', rooms: 1 };

    const action = {
      type: GET_HOUSE,
      payload: data,
    };

    const newState = houseReducer(state, action);
    expect(newState).toEqual(data);
  });
});
