import { LOAD_HOUSES, DELETE_HOUSE, NEW_HOUSE } from '.';
import { headers, getToken } from '../../utils';

export const displayHouses = () => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/v1/houses`, {
    headers: { ...headers, Authorization: getToken() },
  });
  const { data } = await response.json();
  const houses = data.map((ele) => ({
    id: ele.id,
    address: ele.address,
    price: ele.price,
    city: ele.city,
    image: ele.image,
    userId: ele.user_id,
  }));

  dispatch({ type: LOAD_HOUSES, payload: houses });
};

export const addHouse = (house) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/v1/houses`, {
    method: 'POST',
    headers: { ...headers, Authorization: getToken() },
    body: JSON.stringify(house),
  });

  if (response.ok) {
    const { data } = await response.json();
    dispatch({
      type: NEW_HOUSE,
      payload: {
        id: data.id,
        address: data.address,
        price: data.price,
        city: data.city,
        image: data.image,
        userId: data.user_id,
      },
    });
  }
};

export const deleteHouse = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/v1/houses/${id}`, {
    method: 'DELETE',
    headers: { ...headers, Authorization: getToken() },
  });

  if (response.ok) dispatch({ type: DELETE_HOUSE, payload: id });
};
