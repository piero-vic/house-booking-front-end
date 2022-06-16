/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { loginUser } from '../redux/actions/auth';

const Login = ({ loggedIn }) => {
  if (loggedIn) return <Navigate to="/" replace />;

  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onFormSubmit = (data) => dispatch(loginUser(data)).catch(() => setError('Invalid credentials. Try again'));

  return (
    <main className="min-h-screen min-w-full bg-center bg-cover bg-no-repeat bg-login">
      <div className="min-h-screen min-w-full grid place-items-center bg-lime-500 bg-opacity-80">
        <div className="w-3/4 md:w-1/2">
          <div className="border-b border-b-white p-5 mb-5 mx-auto w-10/12">
            <h2 className="text-white text-center font-bold text-4xl">LOG IN</h2>
          </div>
          {error && <p className="text-red-700 font-bold mb-1 text-center">{error}</p>}
          {errors.password && <p className="text-red-700 font-bold mb-1 text-center">Password is required</p>}
          {errors.email && <p className="text-red-700 font-bold mb-1 text-center">Email is required</p>}
          <form className="flex flex-col gap-5 items-center" onSubmit={handleSubmit(onFormSubmit)}>
            <div className="w-full">
              <input className="w-full bg-white py-2 px-4 rounded-3xl" type="email" placeholder="Email" {...register('email', { required: 'Email is required' })} />
            </div>
            <div className="w-full">
              <input className="w-full bg-white py-2 px-4 rounded-3xl" type="password" placeholder="Password" {...register('password', { required: 'Password is required' })} />
            </div>
            <input className="w-1/2 bg-lime-500 text-white py-2 px-4 border-2 border-white rounded-3xl font-bold" type="submit" value="Log In" />
            <Link className="w-1/2 bg-white text-lime-500 py-2 px-4 border-2 border-lime-500 rounded-3xl font-bold text-center" to="/signup">Sign Up</Link>
          </form>
        </div>
      </div>
    </main>
  );
};

Login.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

export default Login;
