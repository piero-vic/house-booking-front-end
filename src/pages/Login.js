/* eslint-disable react/jsx-props-no-spreading */ // TODO: upgrade to latest eslint tooling

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
  const {
    register, handleSubmit, formState: { errors },
  } = useForm();

  return (
    <main className="min-h-screen min-w-full bg-center bg-cover bg-no-repeat bg-login">
      <div className="min-h-screen min-w-full grid place-items-center bg-lime-500 bg-opacity-80">
        <div className="w-3/4 md:w-1/2">
          <div className="border-b border-b-white p-5 mb-5 mx-auto w-10/12">
            <h2 className="text-white text-center font-bold text-4xl">LOG IN</h2>
          </div>
          <form
            className="flex flex-col gap-5 items-center"
            onSubmit={handleSubmit((data) => console.log(data))}
          >
            <div className="w-full">
              {errors.email && <p>Email is required</p>}
              <input className="w-full bg-white py-2 px-4 rounded-3xl" type="text" placeholder="Email" {...register('email', { required: true })} />
            </div>
            <div className="w-full">
              {errors.password && <p>Password is required</p>}
              <input className="w-full bg-white py-2 px-4 rounded-3xl" type="password" placeholder="Password" {...register('password', { required: true })} />
            </div>
            <input className="bg-white text-lime-500 py-2 px-4 border-2 border-lime-500 rounded-3xl font-bold" type="submit" value="Log In" />
            <Link className="bg-lime-500 text-white py-2 px-4 border-2 border-white rounded-3xl font-bold text-center" to="/signup">Sign Up</Link>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
