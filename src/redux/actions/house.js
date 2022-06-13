import { NOT_AUTHENTICATED, NEW_HOUSE } from '.';
import { getToken } from './auth';

const addHouse = (house) => (dispatch) => fetch('http://localhost:3001/v1/houses', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: getToken(),
  },
  body: JSON.stringify(house),
}).then((res) => {
  if (res.ok) {
    return res
      .json()
      .then((house) => dispatch({ type: NEW_HOUSE, payload: house }));
  }
  return res.json().then((errors) => {
    dispatch({ type: NOT_AUTHENTICATED });
    return Promise.reject(errors);
  });
});

export default addHouse;
