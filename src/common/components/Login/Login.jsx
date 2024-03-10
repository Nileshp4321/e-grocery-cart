import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const showData = () => {
    // console.log(email)
    // console.log(password)
  };

  return (
    <div className="flex justify-center items-center flex-wrap w-full z-10">
      <div className="p-6 bg-white flex justify-center items-center flex-col rounded-2xl w-full md:w-3/4 lg:w-2/4 xl:w-2/4">
        <div className="mb-4 text-center">
          <h3 className="font-semibold text-3xl text-yellow-400">Sign In </h3>
          <p className="text-gray-500 text-xl">
            Please sign in to your account.
          </p>
        </div>
        <div className="space-y-6 w-full">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 tracking-wide">
              Email
            </label>
            <input
              className="w-full text-base px-4 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
              type="email"
              placeholder="mail@gmail.com"
              onChange={handleEmail}
            />
          </div>
          <div className="space-y-2">
            <label className="mb-2 text-sm font-medium text-gray-700 tracking-wide">
              Password
            </label>
            <input
              className="w-full text-base px-4 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
              type="password"
              placeholder="Enter your password"
              onChange={handlePassword}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-yellow-400 focus:ring-white-400 border-white rounded"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-800"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="text-yellow-400">
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <button
              onClick={showData}
              type="submit"
              className="w-full flex justify-center border bg-yellow-400 hover:bg-yellow-500 hover:text-white text-black p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-1"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
