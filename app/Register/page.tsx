"use client";
import styles from "../Login/Login.module.css";
import React, { useState } from "react";

//TODO: Add Username regex to prevent users from using special characters and inappropriate words

export const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Username, setUsername] = useState("");

  const [error, setError] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [UsernameError, setUsernameError] = useState(false);

  const [buttonClicked, setButtonClicked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()]).{8,}$/;

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTimeout(() => {
      setButtonClicked(false);
    }, 500); // Revert signup button back to original color after 0.5 second of being clicked

    setFirstNameError(false);
    setLastNameError(false);
    setEmailError(false);
    setUsernameError(false);
    setError("");

    if (!firstName) {
      setFirstNameError(true);
      return;
    }

    if (!lastName) {
      setLastNameError(true);
      return;
    }

    if (
      !email ||
      !email.includes("@") ||
      !email.includes(".") ||
      email.includes(" ")
    ) {
      setEmailError(true);
      return;
    }

    {
      /*TODO: Check if email exists in database
                if (emailExists) {
                    setEmailError(true);
                }*/
    }

    if (!Username) {
      setUsernameError(true);
      return;
    }

    {
      /*TODO: Check if username exists in database
                if (usernameExists) {
                    setUsernameError(true);
                }*/
    }

    {
      /*Check if password is valid */
    }
    if (!passwordRegex.test(pass)) {
      setError(
        "Password must be at least 8 characters long, include a special character, and include at least one number and one capital letter."
      );
      return;
    }
    if (pass !== confirmPass) {
      setError("Passwords do not match.");
      return;
    }

    {
      /*DELETE ONCE FINISHED */
    }
    {
      /*DELETE ONCE FINISHED */
    }
    {
      /*DELETE ONCE FINISHED */
    }
    {
      /*DELETE ONCE FINISHED */
    }
    console.log(email);
    console.log(pass);
    console.log(confirmPass);
    console.log(firstName);
    console.log(lastName);
    console.log(Username);

    const makeRequest = async () => {
      try {
        const res = await fetch("http://35.233.194.137/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: pass,
            firstName: firstName,
            lastName: lastName,
            username: Username,
          }),
        });
        console.log(res);

        if (res.status === 201) {
          // Redirect to home page or any other page after successful login
          window.location.href = "/Login"; // Redirect to home page
          console.log("registration successful");
        } else {
          // Handle failed login
          console.error("registration failed");
        }
      } catch (error) {
        console.error("An error occurred while registering:", error);
      }
    };

    makeRequest();
  };

  return (
    <div className={styles.screenContainer}>
      <div className={styles.loginBox}>
        <div className={styles.logoContainer}>
          <img
            src="../../Public/Images/logo.png"
            alt="CalPal Logo"
            className={styles.logo}
          />
          <h1 className={styles.title}>CalPal</h1>
        </div>

        <form onSubmit={handleSubmit} className={styles.loginForm}>
          {/* First Name input field */}
          <input
            className={styles.input}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            id="name"
            name="name"
          />
          {firstNameError && (
            <p className={styles.error} style={{ color: "red" }}>
              First name is required
            </p>
          )}

          {/* Last Name input field */}
          <input
            className={styles.input}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            id="name"
            name="name"
          />
          {lastNameError && (
            <p className={styles.error} style={{ color: "red" }}>
              Last name is required
            </p>
          )}

          {/* Email input field */}
          <input
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            id="email"
            name="email"
          />
          {emailError && (
            <p className={styles.error} style={{ color: "red" }}>
              Invalid Email
            </p>
          )}

          {/* Username input field */}
          <input
            className={styles.input}
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
            type="username"
            placeholder="Username"
            id="username"
            name="username"
          />
          {UsernameError && (
            <p className={styles.error} style={{ color: "red" }}>
              Username is required
            </p>
          )}

          {/* Password input field */}
          <div style={{ position: "relative" }}>
            <input
              className={styles.input}
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              id="password"
              name="password"
            />
            <button
              type="button"
              onClick={handleTogglePassword}
              style={{
                position: "absolute",
                right: "5px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Confirm Password input field */}
          <div style={{ position: "relative" }}>
            <input
              className={styles.input}
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              id="password"
              name="password"
            />
            <button
              type="button"
              onClick={handleTogglePassword}
              style={{
                position: "absolute",
                right: "5px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <div className={styles.forgotPassword}>
            {/* Already have an account? link */}
            <a href="../Login" className={styles.forgotPasswordLink}>
              Already have an account? Login
            </a>
          </div>
          {error && (
            <p className={styles.error} style={{ color: "red" }}>
              {error}
            </p>
          )}
          {/* Sign up button */}
          <button
            type="submit"
            className={styles.loginButton}
            style={{
              backgroundColor: buttonClicked
                ? "var(--Default-CF577B, #CF577B) "
                : "var(--Default-F886A8, #F886A8)",
            }}
            onMouseEnter={() => setButtonClicked(false)}
            onMouseDown={() => setButtonClicked(true)}
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
