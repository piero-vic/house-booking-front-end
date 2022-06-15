import { GET_MY_RESERVATIONS } from '../../redux/actions';
import reservationsReducer from '../../redux/reducers/reservations';

describe('reservationReducers', () => {
  test('Loads all the reservations correctly', () => {
    const state = [];

    const data = [
      { date: '17/2/2024', house_id: 1, user_id: 1 },
      { date: '18/4/2024', house_id: 1, user_id: 1 },
    ];
    const action = {
      type: GET_MY_RESERVATIONS,
      payload: data,
    };

    const newState = reservationsReducer(state, action);
    expect(newState.length).toBe(2);
    expect(newState).toEqual(data);
  });
});
