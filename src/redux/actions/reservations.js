import { NOT_AUTHENTICATED, GET_MY_RESERVATIONS } from '.';
import { getToken } from './auth';

const getReservations = () => (dispatch) => fetch('http://localhost:3001/v1/reservations', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: getToken(),
  },
}).then((res) => {
  if (res.ok) {
    return res
      .json()
      .then((reservations) => dispatch({ type: GET_MY_RESERVATIONS, payload: reservations }));
  }
  return res.json().then((errors) => {
    dispatch({ type: NOT_AUTHENTICATED });
    return Promise.reject(errors);
  });
});

export default getReservations;
