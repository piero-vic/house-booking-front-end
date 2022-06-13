import { AUTHENTICATED, NOT_AUTHENTICATED } from '.';
import { headers, setToken, getToken } from '../../utils';

export const checkAuth = () => (dispatch) => fetch('http://localhost:3001/v1/current_user', {
  headers: { ...headers, Authorization: getToken() },
}).then((res) => {
  if (res.ok) {
    return res.json().then((user) => dispatch({ type: AUTHENTICATED, payload: user }));
  }
  return Promise.reject(dispatch({ type: NOT_AUTHENTICATED }));
});

export const signupUser = (credentials) => (dispatch) => fetch('http://localhost:3001/v1/signup', {
  method: 'POST', headers, body: JSON.stringify({ user: credentials }),
}).then((res) => {
  if (res.ok) {
    setToken(res.headers.get('Authorization'));
    return res
      .json()
      .then(({ data }) => dispatch({ type: AUTHENTICATED, payload: data }));
  }
  return res.json().then((errors) => {
    dispatch({ type: NOT_AUTHENTICATED });
    return Promise.reject(errors);
  });
});

export const loginUser = (credentials) => (dispatch) => fetch('http://localhost:3001/v1/login', {
  method: 'POST', headers, body: JSON.stringify({ user: credentials }),
}).then((res) => {
  if (res.ok) {
    setToken(res.headers.get('Authorization'));
    return res
      .json()
      .then(({ data }) => dispatch({ type: AUTHENTICATED, payload: data }));
  }
  return res.json().then((errors) => {
    dispatch({ type: NOT_AUTHENTICATED });
    return Promise.reject(errors);
  });
});

export const logoutUser = () => (dispatch) => fetch('http://localhost:3001/v1/logout', {
  method: 'DELETE',
  headers: { ...headers, Authorization: getToken() },
}).then((res) => {
  if (res.ok) {
    return dispatch({ type: NOT_AUTHENTICATED });
  }
  return res.json().then((errors) => {
    dispatch({ type: NOT_AUTHENTICATED });
    return Promise.reject(errors);
  });
});
