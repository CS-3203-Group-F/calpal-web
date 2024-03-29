"use client";
import styles from './Login.module.css';
import React, { useState}  from "react";
import Link from 'next/link';



  
  export const Login =()=> { 
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        //
        //DELETE ONCE FINISHED
        //
        console.log(email);
        console.log(pass);
        //submit form logic goes here

    }
    return (
        <div className={styles.screenContainer}>
        <div className={styles.loginBox}>
        <div className={styles.logoContainer}>
        {/*<img src="/Images/logo.png" alt="Logo"/>*/}
          <h1 className={styles.title}>CalPal</h1>
          </div>

            <form onSubmit={handleSubmit} className={styles.loginForm}>
                {/*Input Fields of login Page */}
                <input
                    className={styles.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email or Username"
                    id="email"
                    name="email"
                />
                
                <input
                    className={styles.input}
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    type="password"
                    placeholder="Password"
                    id="password"
                    name="password"
                />
                <div className={styles.forgotPassword}>
                    {/* Forgot Password link */}
                    <a href="../ResetPassword" className={styles.forgotPasswordLink}>Forgot Password?</a>
                </div>
                <button type="submit" className={styles.loginButton}>Login</button>
            </form>

            <div className={styles.orSeparator}>______________________or______________________</div>
            {/*Link is being passed as a button to Register page*/}
            <Link href="../Register" passHref>
            <button  className={styles.signUpButton}>Sign Up</button>
            </Link>
        </div>
    </div>
);

};
export default Login; 