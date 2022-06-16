import { LOAD_HOUSES, NEW_HOUSE, DELETE_HOUSE } from '../../redux/actions';
import housesReducer from '../../redux/reducers/houses';

describe('housesReducer', () => {
  test('Loads every house correctly', () => {
    const state = [];

    const action = {
      type: LOAD_HOUSES,
      payload: [
        { id: 1, address: 'Some address' },
        { id: 2, address: 'Some other address' },
      ],
    };

    const newState = housesReducer(state, action);
    expect(newState.length).toBe(2);
  });

  test('Adds a new house correctly', () => {
    const state = [];

    const action = {
      type: NEW_HOUSE,
      payload: { id: 1, address: 'Some address' },
    };

    const newState = housesReducer(state, action);
    expect(newState.length).toBe(1);
  });

  test('Deletes a house correctly', () => {
    const state = [
      { id: 1, address: 'Some address' },
      { id: 2, address: 'Some other address' },
    ];

    const action = { type: DELETE_HOUSE, payload: 1 };

    const newState = housesReducer(state, action);
    expect(newState.length).toBe(1);
  });
});
