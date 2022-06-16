import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { displayHouse } from '../redux/actions/house';

const HouseDetails = () => {
  const param = useParams();
  const dispatch = useDispatch();

  const house = useSelector((state) => state.currentHouse);
  useEffect(() => {
    dispatch(displayHouse(param.id));
  },
  []);

  return (
    <div className="w-11/12 mx-auto pt-20 gap-6 sm:flex">
      <img className="h-4/5 w-4/5 mb-5 sm:min-w-0 min-w-full" src={house.image} alt="house" />
      <div className="items-start">
        <div className="text-right mb-4 text-gray-800">
          <div className="font-semibold text-2xl tracking-tighter">{house.address}</div>
          <div className="text-xs font-extrabold">{house.city}</div>
        </div>
        {Object.keys(house).map((keyName, i) => (
          <table className={`${(i === 0 || i === 1 || i === 2) ? 'hidden' : 'odd:bg-stone-200 text-xs text-slate-600 font-medium py-1 px-2 last-of-type:hidden relative flex min-w-full w-40'}`} key={keyName}>

            <td>
              {keyName.charAt(0).toUpperCase() + keyName.slice(1).replaceAll('_', ' ')}
            </td>
            <td className="absolute right-2">
              {house[keyName]}
            </td>
          </table>
        ))}
        <div className="text-center sm:text-right">
          <Link id={house.id} to={`/reserve/${house.id}`}>
            <button className="text-sm font-semibold px-10 py-3 sm:mt-10 mt-5 leading-5 tracking-wide bg-lime-500 text-white rounded-full" type="button">Reserve</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HouseDetails;
