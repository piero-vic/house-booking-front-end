import { GET_MY_RESERVATIONS } from '.';
import { headers, getToken } from '../../utils';

const getReservations = () => async (dispatch) => {
  const response = await fetch('http://localhost:3001/v1/reservations', {
    method: 'GET',
    headers: {
      ...headers,
      Authorization: getToken(),
    },
  });

  if (response.ok) {
    const { data } = await response.json();
    dispatch({ type: GET_MY_RESERVATIONS, payload: data });
  }
};

export default getReservations;
