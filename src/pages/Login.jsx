import React from 'react';

const Login = () => {
  return (
    <div className="w-full md:h-screen pt-4 md:pt-24 md:bg-pink-100 pb-4">
      <div className="w-full max-w-lg h-5/6 bg-white m-auto pt-2 px-4 sm:px-14 rounded-2xl">
        <h1 className="mt-3 mx-0 text-2xl font-semibold justify-center items-center flex">Sign Up</h1>
        <div className="flex flex-col gap-7 mt-7">
          <input
            className="h-12 rounded-2xl w-full pl-5 border border-solid outline-none text-lg border-grey-500"
            type="text"
            placeholder="Enter Your Name"
          />
          <input
            className="h-12 w-full rounded-2xl pl-5 border border-solid outline-none text-lg border-grey-500"
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            className="h-12 rounded-2xl w-full pl-5 border border-solid outline-none text-lg border-grey-500"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <button className="w-full h-12 mt-7 border-none text-2xl font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white cursor-pointer hover:text-black rounded-2xl">
          Sign Up
        </button>
        <p className="mt-5 text-lg font-medium">
          Already have an account? <span className="text-red-400 font-semibold">Login here</span>
        </p>
        <div className="flex items-center mt-6 gap-5 text-lg font-medium">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
