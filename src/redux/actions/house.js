import { GET_HOUSE } from '.';
import { getToken } from './auth';

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
