import { LOAD_HOUSES } from '.';
import { getToken } from './auth';

export const loadHouses = (payload) => ({
  type: LOAD_HOUSES,
  payload,
});

const fetchData = async () => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: getToken(),
  };
  const response = await fetch('http://localhost:3001/v1/houses', { headers });
  const data = await response.json();
  return data;
};

export const displayHouses = () => async (dispatch) => {
  const { data } = await fetchData();

  const HousesTemp = data.map((ele) => ({
    id: ele.id,
    address: ele.address,
    price: ele.price,
    city: ele.city,
    image: ele.image,
  }));
  dispatch(loadHouses(HousesTemp));
};
