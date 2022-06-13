import { GET_MY_RESERVATIONS } from '.';
import { getToken } from './auth';

const getReservations = () => async (dispatch) => {
  const response = await fetch('http://localhost:3001/v1/reservations', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: getToken(),
    },
  });

  if (response.ok) {
    const { data } = await response.json();
    dispatch({ type: GET_MY_RESERVATIONS, payload: data });
  }
};

export default getReservations;
