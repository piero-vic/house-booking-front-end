import { NOT_AUTHENTICATED, NEW_HOUSE, GET_HOUSE } from '.';
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

export const getHouse = (payload) => ({
  type: GET_HOUSE,
  payload,
});

const fetchData = async (id) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: getToken(),
  };
  const response = await fetch(`http://localhost:3001/v1/houses/${id}`, { headers });
  const data = await response.json();
  return data;
};

export const displayHouse = (id) => async (dispatch) => {
  const { data } = await fetchData(id);
  const HousesTemp = {
    id: data.id,
    address: data.address,
    city: data.city,
    price: `${data.price}$`,
    zip_code: data.zip_code,
    rooms: data.rooms,
    bathrooms: data.bathrooms,
    surroundings: data.surroundings,
    construction_year: data.construction_year,
    image: data.image,
  };
  dispatch(getHouse(HousesTemp));
};
