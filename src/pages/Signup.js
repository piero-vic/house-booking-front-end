/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { signupUser } from '../redux/actions/auth';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onFormSubmit = (data) => {
    dispatch(signupUser(data));
    navigate('/');
  };

  return (
    <main className="min-h-screen min-w-full bg-center bg-cover bg-no-repeat bg-login">
      <div className="min-h-screen min-w-full grid place-items-center bg-lime-500 bg-opacity-80">
        <div className="w-3/4 md:w-1/2">
          <div className="border-b border-b-white p-5 mb-5 mx-auto w-10/12">
            <h2 className="text-white text-center font-bold text-4xl">Sign Up</h2>
          </div>
          <form className="flex flex-col gap-5 items-center" onSubmit={handleSubmit(onFormSubmit)}>
            <div className="w-full">
              <input
                className="w-full bg-white py-2 px-4 rounded-3xl"
                type="text"
                placeholder="Username"
                {...register('username', { required: 'Username is required' })}
              />
            </div>
            <div className="w-full">
              <input
                className="w-full bg-white py-2 px-4 rounded-3xl"
                type="email"
                placeholder="Email"
                {...register('email', { required: 'Email is required' })}
              />
            </div>
            <div className="w-full">
              <input
                className="w-full bg-white py-2 px-4 rounded-3xl"
                type="password"
                placeholder="Password"
                {...register('password', { required: 'Password is required' })}
              />
            </div>
            <input
              className="w-1/2 bg-lime-500 text-white py-2 px-4 border-2 border-white rounded-3xl
            font-bold"
              type="submit"
              value="Sign Up"
            />
            <Link className="w-1/2 bg-white text-lime-500 py-2 px-4 border-2 border-lime-500 rounded-3xl font-bold text-center" to="/login">Log In</Link>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Signup;
