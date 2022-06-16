/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { headers, getToken } from '../utils';

const ReservationForm = () => {
  const [error, setError] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.auth);
  const { register, handleSubmit } = useForm();

  const onFormSubmit = async (data) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/v1/reservations`, {
      method: 'POST',
      headers: {
        ...headers,
        Authorization: getToken(),
      },
      body: JSON.stringify({
        date: data.date, user_id: currentUser.id, house_id: parseInt(id, 10),
      }),
    });

    if (response.ok) {
      navigate('/reservations');
    } else {
      setError('We could not add your reservation.');
    }
  };

  return (
    <main className="min-h-screen min-w-full bg-center bg-cover bg-no-repeat bg-login">
      <div className="min-h-screen min-w-full grid place-items-center bg-lime-500 bg-opacity-80">
        <div className="w-3/4 md:w-1/2">
          <div className="border-b border-b-white p-5 mb-5 mx-auto w-10/12">
            <h2 className="text-white text-center font-bold text-4xl">BOOK A RESERVATION</h2>
          </div>
          {error && <p className="text-red-700 font-bold mb-1 text-center">{error}</p>}
          <form className="flex flex-col gap-5 items-center" onSubmit={handleSubmit(onFormSubmit)}>
            <div className="w-full">
              <input className="w-full bg-white py-2 px-4 rounded-3xl" type="date" {...register('date', { required: 'Date is required' })} />
            </div>
            <input className="w-1/2 bg-lime-500 text-white py-2 px-4 border-2 border-white rounded-3xl font-bold" type="submit" value="Add Reservation" />
            <Link className="w-1/2 bg-white text-lime-500 py-2 px-4 border-2 border-lime-500 rounded-3xl font-bold text-center" to="/reservations">Your Reservations</Link>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ReservationForm;
