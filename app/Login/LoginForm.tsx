"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { signIn } from "../actions/auth";
import { useState } from "react";

type FormValues = {
  email: string;
  password: string;
};

export function LoginForm() {
  // Destructure useForm from the react hook form library, getting only register
  const { register } = useForm<FormValues>();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Upon submission, the form sends the data to a server action caleld signIn, which can be found in auth.tsx
  return (
    <form action={signIn} className="flex flex-col gap-8 self-stretch">
      {/*Input Fields of login Page */}
      <div className="flex flex-col justify-start items-start gap-2 self-stretch">
        <label
          htmlFor="email"
          className="text-stone-900 text-2xl font-semibold tracking-tighter"
        >
          Username
        </label>
        <input
          className="p-4 rounded-lg border border-gray-300 self-stretch"
          type="email"
          placeholder="Enter your email"
          id="email"
          {...register("email")}
        />
      </div>

      <div className="flex flex-col justify-start items-start gap-2 self-stretch">
        <label
          htmlFor="password"
          className="text-stone-900 text-2xl font-semibold tracking-tighter"
        >
          Password
        </label>
        <div className="relative w-full">
          <input
            className="p-4 rounded-lg border border-gray-300 self-stretch w-full pr-10"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            id="password"
            {...register("password")}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            {showPassword ? (
              <svg
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4.5C7.306 4.5 3.326 7.2 1.639 12c1.687 4.8 5.667 7.5 10.361 7.5s8.674-2.7 10.361-7.5C20.674 7.2 16.694 4.5 12 4.5zM12 15.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4.5C7.306 4.5 3.326 7.2 1.639 12c1.687 4.8 5.667 7.5 10.361 7.5s8.674-2.7 10.361-7.5C20.674 7.2 16.694 4.5 12 4.5zM12 15.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7zM3 3l18 18"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="hover:bg-gray-700 p-2 bg-gray-800 rounded-lg flex-col justify-center items-center flex"
      >
        <span className=" h-9 text-center text-white text-[20px] font-semibold">
          Sign In
        </span>
      </button>
    </form>
  );
}
