/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addHouse } from '../redux/actions/houses';

const NewHouseForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFormSubmit = async (data) => {
    await dispatch(addHouse(data));
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form className="w-full" onSubmit={handleSubmit(onFormSubmit)}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="house-address"
            >
              Address
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="house-address"
              type="text"
              placeholder="Address"
              {...register('address', { required: 'Address is required' })}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="house-city"
            >
              City
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="house-city"
              type="text"
              placeholder="City"
              {...register('city', { required: 'City is required' })}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="house-zipcode"
            >
              Zip Code
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="house-zipcode"
              type="number"
              placeholder="Zip Code"
              {...register('zip_code', { required: 'Zip Code is required' })}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="house-image"
            >
              Image
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="house-image"
              type="url"
              placeholder="Image"
              {...register('image', { required: 'Image is required' })}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="house-room-no"
            >
              Number of Rooms
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="house-room-no"
              type="number"
              placeholder="Number of Rooms"
              {...register('rooms', { required: 'Number of Rooms is required' })}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="house-bathrooms-no"
            >
              Number of Bathrooms
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="house-bathrooms-no"
              type="number"
              placeholder="Number of Bathrooms"
              {...register('bathrooms', { required: 'Number of Bathrooms is required' })}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="house-construction-year"
            >
              Construction Year
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="house-construction-year"
              type="number"
              placeholder="Construction Year"
              {...register('construction_year', { required: 'Construction Year is required' })}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="house-pricing"
            >
              Price
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="house-pricing"
              type="number"
              placeholder="Price"
              {...register('price', { required: 'Price is required' })}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="house-sarounding"
            >
              Sarounding
            </label>
            <textarea
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="house-sarounding"
              placeholder="Sarounding"
              {...register('surroundings', { required: 'Sarounding is required' })}
            />
          </div>
        </div>
        <div className="flex flex-wrap pl-4 -mx-3 mb-6">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Add House
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewHouseForm;
