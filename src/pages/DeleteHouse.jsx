/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { displayHouses, deleteHouse } from '../redux/actions/houses';
import PageHeading from '../components/PageHeading';

const DeleteHouse = () => {
  const houses = useSelector((state) => state.HousesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (houses.length === 0) {
      dispatch(displayHouses());
    }
  }, []);

  return (
    <main className="container min-h-screen pt-20 pb-10 sm:pt-32">
      <PageHeading title="DELETE A HOUSE" subtitle="Manage your houses" />
      <ul className="w-4/5 mx-auto grid grid-cols-1 xl:grid-cols-2 gap-5">
        {houses.map((house) => (
          <li key={house.id} className="flex flex-col gap-3 sm:flex-row max-w-xl mx-auto justify-between border border-gray-400 rounded-lg p-3">
            <img src={house.image} alt="" className="w-full sm:w-3/5 rounded-lg" />
            <div className="flex-grow flex flex-col">
              <div className="text-right mb-3">
                <p className="font-semibold text-2xl tracking-tighter">{house.address}</p>
                <p className="text-xs font-extrabold">{house.city}</p>
              </div>
              <div className="flex justify-end gap-1 flex-wrap mt-auto">
                <Link to={`/houses/${house.id}`} className="w-4/5 text-center flex-grow font-semibold px-5 py-2 bg-lime-500 text-white rounded-full">
                  Info
                </Link>
                <button
                  type="button"
                  className="w-4/5 text-center flex-grow font-semibold px-5 py-2 bg-red-500 text-white rounded-full"
                  onClick={() => dispatch(deleteHouse(house.id))}
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default DeleteHouse;
