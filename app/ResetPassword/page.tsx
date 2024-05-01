"use client"
import React, {useState} from "react";
import styles from '../Login/Login.module.css';
import Link from 'next/link';


export const passReset =()=> {
    const[email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
    }


    return (
        <div className={styles.screenContainer}>
        <div className={styles.loginBox}>
        <div className={styles.logoContainer}>
          {/* Logo or title; replace with actual logo image */}
          <h1 className={styles.title} style={{ height: '100%', width: '100%', textAlign: "center"}}>Reset Password</h1>
          <p style ={{textAlign: "center"}}>Enter the email associated with your account and we’ll send an email with a code to reset your password.</p>
          </div>

            <form onSubmit={handleSubmit} className={styles.loginForm}>
                {/*Input Fields of login Page */}
                <input
                    className={styles.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                />
                
                <button type="submit" className={styles.loginButton}>Next</button>
                
                <Link href="../Login" passHref>
            <button  className={styles.signUpButton} style = {{marginTop: '10px'}}>Go Back</button>
            </Link>
            </form>


        </div>
    </div>
);

};
export default passReset; 