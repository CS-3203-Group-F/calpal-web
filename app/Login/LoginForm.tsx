"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { signIn } from "../actions/auth";

type FormValues = {
  email: string;
  password: string;
};

export function LoginForm() {
  // Destructure useForm from the react hook form library, getting only register
  const { register } = useForm<FormValues>();

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
        <input
          className="p-4 rounded-lg border border-gray-300 self-stretch"
          type="password"
          placeholder="Enter your password"
          id="password"
          {...register("password")}
        />
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
