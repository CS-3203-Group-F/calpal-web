"use client";
import styles from '../Login/Login.module.css';
import React, {useState} from "react";

export const Register = () =>{
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className={styles.loginContainer}>
        <div className={styles.loginBox}>
        <div className={styles.logoContainer}>
          {/* Logo or title; replace with actual logo image */}
          <h1 className={styles.title}>CalPal</h1>
          </div>
        
        <form onSubmit={handleSubmit} className={styles.loginForm}>
                {/*Input Fields of login Page */}
                <input
                    className={styles.input}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    id="name"
                    name="name"
                />

                <input
                    className={styles.input}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    id="name"
                    name="name"
                />
                
                <input
                    className={styles.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
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

                <input
                    className={styles.input}
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                    type="password"
                    placeholder=" Confirm Password"
                    id="password"
                    name="password"
                />

                <div className={styles.forgotPassword}>
                    {/* Already have an account? link */}
                    <a href="../Login" className={styles.forgotPasswordLink}>Already have an account? Login</a>
                </div>
                <button type="submit" className={styles.loginButton}>Sign up</button>
            </form>
        </div>
    </div>
    )
} 

export default Register; 