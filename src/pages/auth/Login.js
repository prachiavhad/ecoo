import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeSlash } from "@phosphor-icons/react";

export const Login = () => {
  const email = useRef();
  const password = useRef();
  const [showPass, setShowPass] = useState(false);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center py-12">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg dark:bg-gray-800 p-8 space-y-6">
        <Link
          to="/"
          className="flex justify-center items-center text-3xl font-semibold text-primary-600 dark:text-white mb-6"
        >
           Ecofarm Exchange
        </Link>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-4">
          Sign in to your account
        </h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Your email
            </label>
            <input
              ref={email}
              type="email"
              id="email"
              name="email"
              placeholder="name@company.com"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-primary-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Password
            </label>
            <div className="relative mt-2">
              <input
                ref={password}
                type={showPass ? "text" : "password"}
                id="password"
                name="password"
                placeholder="••••••••"
                minLength="8"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-primary-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-gray-300"
              >
                {showPass ? (
                  <EyeSlash weight="bold" size={24} />
                ) : (
                  <Eye weight="bold" size={24} />
                )}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-primary-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 transition duration-200"
          >
            Sign In
          </button>
          <p className="text-sm text-center text-gray-500 dark:text-gray-400">
            Don’t have an account yet?{" "}
            <Link
              to="/register"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};
