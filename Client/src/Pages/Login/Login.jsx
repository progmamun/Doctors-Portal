import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init.js';

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register('email', {
                  pattern: { value: /[A-Za-z]{3}/, message: 'Error message' },
                })}
              />
            </div>
            <input {...register('firstName', { required: true })} />
            {errors.firstName?.type === 'required' && 'First name is required'}

            <input {...register('lastName', { required: true })} />
            {errors.lastName && 'Last name is required'}

            <input type="submit" />
          </form>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline btn-accent"
          >
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
