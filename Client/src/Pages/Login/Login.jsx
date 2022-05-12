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
                  required: { value: true, message: 'Email is Required' },
                  pattern: {
                    value: /[A-Za-z]{3}/,
                    message: 'Provide a valid Email',
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === 'required' && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === 'pattern' && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Your password"
                className="input input-bordered w-full max-w-xs"
                {...register('password', {
                  required: { value: true, message: 'Password is Required' },
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === 'required' && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === 'pattern' && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>

            <input
              className="btn w-full max-w-xs text-white"
              value="Login"
              type="submit"
            />
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
