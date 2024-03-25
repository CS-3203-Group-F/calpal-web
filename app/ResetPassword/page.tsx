"use client"
import React, {useState} from "react";
import styles from '../Login/Login.module.css';


export const passReset =()=> {
    const[email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
    }


    return (
        <div className={styles.loginContainer}>
        <div className={styles.loginBox}>
        <div className={styles.logoContainer}>
          {/* Logo or title; replace with actual logo image */}
          <h1 className={styles.title}>Reset Password</h1>
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
                
                <button type="submit" className={styles.loginButton}>Login</button>
            </form>


        </div>
    </div>
);

};
export default passReset; 