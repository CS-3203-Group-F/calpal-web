"use client"
import React, {useState} from "react";
import styles from '../../Login/Login.module.css';
import Link from 'next/link';


export const passReset =()=> {
    const[code, setCode] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
    }


    return (
        <div className={styles.screenContainer}>
        <div className={styles.loginBox}>
        <div className={styles.logoContainer}>
          {/* Logo or title; replace with actual logo image */}
          <h1 className={styles.title} style={{ height: '100%', width: '100%', textAlign: "center"}}>Check Your Mail</h1>
          <p style ={{textAlign: "center"}}>We have sent a code to your email to reset your password. Enter the code below</p>
          </div>

            <form onSubmit={handleSubmit} className={styles.loginForm}>
                {/*Input Fields of login Page */}
                <input
                    className={styles.input}
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    type="number"
                    placeholder="Enter Code"
                    id="number"
                    name="number"
                />
                
                <button type="submit" className={styles.loginButton}>Next</button>
                
                <Link href="../ResetPassword" passHref>
            <button  className={styles.signUpButton} style = {{marginTop: '10px'}}>Go Back</button>
            </Link>
            </form>


        </div>
    </div>
);

};
export default passReset; 