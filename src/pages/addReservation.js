/* eslint-disable react/jsx-props-no-spreading */
// import { useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import addReservationData from '../redux/actions/reservations';

const AddReservation = () =>
// const { reserve, handleReserve } = useForm();
// const dispatch = useDispatch();

//   const onClickSubmit = (data) => {
//     dispatch(addReservationData(data));
//   };
//   onSubmit={handleReserve(onClickSubmit)}
  (
    <main className="min-h-screen min-w-full bg-center bg-cover bg-no-repeat bg-login">
      <div className="min-h-screen min-w-full grid place-items-center bg-lime-500 bg-opacity-80">
        <div className="w-3/4 md:w-1/2">
          <div className="border-b border-b-white p-5 mb-5 mx-auto w-10/12">
            <h2 className="text-white text-center font-bold text-4xl">Book an Appointment</h2>
          </div>
          <form className="flex flex-col gap-5 items-center">
            <div className="w-full">
              <input
                className="w-full bg-white py-2 px-4 rounded-3xl"
                type="date"
                placeholder="XX/0X/XXXX"
              />
            </div>
            <input className="w-1/2 bg-lime-500 text-white py-2 px-4 border-2 cursor-pointer border-white rounded-3xl font-bold" type="submit" value="Book an Appointement" />
            <Link className="w-1/2 bg-white text-lime-500 py-2 px-4 border-2 border-lime-500 rounded-3xl font-bold text-center" to="/reservations">Your Reservations</Link>
          </form>
        </div>
      </div>
    </main>
  );
export default AddReservation;
