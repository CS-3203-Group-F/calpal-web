"use client";
import styles from "./Login.module.css";
import React, { useState } from "react";
import Link from "next/link";
import { ViewList } from "@/components/Icons";

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
    // <div className={styles.screenContainer}>
    //   <div className={styles.loginBox}>
    //     <div className={styles.logoContainer}>
    //       {/*<img src="/Images/logo.png" alt="Logo"/>*/}
    //       <h1 className={styles.title}>CalPal</h1>
    //     </div>

    // <form onSubmit={handleSubmit} className={styles.loginForm}>
    //   {/*Input Fields of login Page */}
    //   <input
    //     className={styles.input}
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //     type="email"
    //     placeholder="Email or Username"
    //     id="email"
    //     name="email"
    //   />

    //   <input
    //     className={styles.input}
    //     value={pass}
    //     onChange={(e) => setPass(e.target.value)}
    //     type="password"
    //     placeholder="Password"
    //     id="password"
    //     name="password"
    //   />
    //   <div className={styles.forgotPassword}>
    //     {/* Forgot Password link */}
    //     <a href="../ResetPassword" className={styles.forgotPasswordLink}>
    //       Forgot Password?
    //     </a>
    //   </div>
    //   <button type="submit" className={styles.loginButton}>
    //     Login
    //   </button>
    // </form>

    //     <div className={styles.orSeparator}>
    //       <div className={styles.line}></div>
    //       <span>or</span>
    //       <div className={styles.line}></div>
    //     </div>

    //     {/*Link is being passed as a button to Register page*/}
    //     <Link href="../Register" passHref>
    //       <button className={styles.signUpButton}>Sign Up</button>
    //     </Link>
    //   </div>
    // </div>
  );
};
export default Login;

function LeftLoginPanel() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const makeRequest = async () => {
      try {
        const res = await fetch("http://35.233.194.137/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `username=${encodeURIComponent(
            email
          )}&password=${encodeURIComponent(pass)}`,
        });
        console.log(res);

        if (res.status === 200) {
          // Redirect to home page or any other page after successful login
          window.location.href = "/Calendar"; // Redirect to home page
          console.log("Login successful");
        } else {
          // Handle failed login
          console.error("Login failed");
        }
      } catch (error) {
        console.error("An error occurred while logging in:", error);
      }
    };

    makeRequest();

    //submit form logic goes here
  };

  return (
    <div className="flex py-16 items-center justify-center bg-white ">
      <div className=" flex flex-col justify-end items-center gap-16 w-3/5">
        <CalPalLogo />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 self-stretch"
        >
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email or Username"
              id="email"
              name="email"
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
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="Password"
              id="password"
              name="password"
            />
          </div>

          <LoginSignInButton />
        </form>

        <div className="flex-col justify-center items-center gap-4 inline-flex">
          <p className="text-center text-neutral-900 text-xl font-semibold font-['Inter']">
            Dont have an account?
          </p>
          <Link
            href="../Register"
            className="px-32 py-2 rounded-lg border-2 border-teal-200 flex-col justify-center items-center gap-2.5 inline-flex"
          >
            <span className="text-center text-teal-200 text-2xl font-semibold font-['Inter']">
              Sign up!
            </span>
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

function LoginSignInButton() {
  return (
    <button
      type="submit"
      className="hover:bg-gray-700 p-2 bg-gray-800 rounded-lg flex-col justify-center items-center flex"
    >
      <span className=" h-9 text-center text-white text-[20px] font-semibold">
        Sign In
      </span>
    </button>
  );
}

function LoginWelcomeBackPanel() {
  return (
    <div className="flex justify-end items-center self-stretch py-6 px-16 border-r border-gray-200 bg-white">
      <div className="flex flex-col items-start gap-2">
        <span className={styles.textWelcome}>Welcome</span>
        <span className={styles.textBack}>Back!</span>
      </div>
    </div>
  );
}
