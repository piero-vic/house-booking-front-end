import { AUTHENTICATED, NOT_AUTHENTICATED } from '../../redux/actions';
import authReducer from '../../redux/reducers/auth';

describe('authReducer', () => {
  test('Loads the auth correctly', () => {
    const initialState = {
      authChecked: false,
      loggedIn: false,
      currentUser: {},
    };

    const data = { id: 1, name: 'name1' };

    const action = {
      type: AUTHENTICATED,
      payload: data,
    };

    const newState = authReducer(initialState, action);
    expect(newState.authChecked).toEqual(true);
    expect(newState.loggedIn).toEqual(true);
    expect(newState.currentUser).toEqual(data);
  });

  test('If not authenticated does not load the user', () => {
    const initialState = {
      authChecked: false,
      loggedIn: false,
      currentUser: {},
    };

    const data = { id: 1, name: 'name1' };

    const action = {
      type: NOT_AUTHENTICATED,
      payload: data,
    };

    const newState = authReducer(initialState, action);
    expect(newState.authChecked).toEqual(true);
    expect(newState.loggedIn).toEqual(false);
    expect(newState.currentUser).toEqual({});
  });
});
