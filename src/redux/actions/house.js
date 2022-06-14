import { GET_HOUSE } from '.';
import { headers, getToken } from '../../utils';

export const getHouse = (payload) => ({ type: GET_HOUSE, payload });

export const displayHouse = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/v1/houses/${id}`, {
    headers: {
      ...headers,
      Authorization: getToken(),
    },
  });

  const { data } = await response.json();

  const house = {
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
  dispatch(getHouse(house));
};
