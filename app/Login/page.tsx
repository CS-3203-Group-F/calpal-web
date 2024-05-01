import styles from "./Login.module.css";
import React from "react";
import Link from "next/link";
import { LoginForm } from "./LoginForm";

export const Login = () => {
  return (
    <div
      style={{
        background:
          "var(--CalPal-Gradient, linear-gradient(253deg, #FFF 0.52%, #FCFBE8 33.85%, #E8FEFF 99.99%));",
      }}
      className="w-screen h-screen flex flex-col justify-center items-center"
    >
      <div
        style={{ gridTemplateColumns: "1fr 2fr" }}
        className="grid rounded-2xl shadow-md  overflow-clip"
      >
        <LoginWelcomeBackPanel />
        <LeftLoginPanel />
      </div>
    </div>
  );
};

export default Login;

function LeftLoginPanel() {
  return (
    <div className="flex py-16 items-center justify-center bg-white ">
      <div className=" flex flex-col justify-end items-center gap-16 w-3/5">
        <CalPalLogo />
        <LoginForm />
        <div className="flex-row justify-center items-center inline-flex">
          <p className="text-center text-neutral-900 text-xl font-semibold font-['Inter']">
            Dont have an account?&nbsp;
          </p>
          <Link
            href="../Register"
            className="hover:underline text-center text-xl font-semibold font-['Inter'] text-blue-500"
          >
            Sign up!
          </Link>
        </div>
      </div>
    </div>
  );
}

function CalPalLogo() {
  return (
    <div className="flex flex-row gap-2 items-center">
      {/* <span>
  <ViewList />
</span> */}
      <span className={styles.textCalPal}>CalPal</span>
    </div>
  );
}

function LoginWelcomeBackPanel() {
  return (
    <div className="flex justify-end items-center self-stretch py-6 px-16 border-r border-gray-200 bg-white">
      <div className="hover:gap-4 transition-all flex flex-col items-start gap-0">
        <span className={styles.textWelcome}>Welcome</span>
        <span className={styles.textBack}>Back!</span>
      </div>
    </div>
  );
}
