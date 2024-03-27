"use client";
import styles from '../Login/Login.module.css';
import React, {useState} from "react";

export const Register = () =>{
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[Username, setUsername] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()]).{8,}$/;

            const handleTogglePassword = () => {
                setShowPassword(!showPassword);
            };
   

            const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
                e.preventDefault();

                {/*DELETE ONCE FINISHED */}
                {/*DELETE ONCE FINISHED */}
                {/*DELETE ONCE FINISHED */}
                {/*DELETE ONCE FINISHED */}
                console.log(email);
                console.log(pass);
                console.log(confirmPass);
                console.log(firstName);
                console.log(lastName);
                console.log(Username);

                {/*Check if password is valid */}
            if (!passwordRegex.test(pass)) {
            setError('Password must be at least 8 characters long, include a special character, and include at least one number and one capital letter.');
            return;
            }
            if (pass !== confirmPass) {
            setError('Passwords do not match.');
            return;
            }
            }


    return (
        <div className={styles.loginContainer}>
        <div className={styles.loginBox}>
        <div className={styles.logoContainer}>
          {/* Logo or title; replace with actual logo image */}
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
                {/* Last Name input field */}
                <input
                    className={styles.input}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    id="name"
                    name="name"
                />
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
                {/* Password input field */}
            <div style={{ position: 'relative' }}>
                <input
                className={styles.input}
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                id="password"
                name="password"
                />
                    <button type="button" onClick={handleTogglePassword} style={{ position: 'absolute', right: '5px', top: '50%', transform: 'translateY(-50%)' }}>
                    {showPassword ? 'Hide' : 'Show'}
                    </button>
            </div>

                {/* Confirm Password input field */}
            <div style={{ position: 'relative' }}>
                <input
                className={styles.input}
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
                type={showPassword ? 'text' : 'password'}
                placeholder="Confirm Password"
                id="password"
                name="password"
                />
                    <button type="button" onClick={handleTogglePassword} style={{ position: 'absolute', right: '5px', top: '50%', transform: 'translateY(-50%)' }}>
                    {showPassword ? 'Hide' : 'Show'}
                    </button>
            </div>  

                
                <div className={styles.forgotPassword}>
                    {/* Already have an account? link */}
                    <a href="../Login" className={styles.forgotPasswordLink}>Already have an account? Login</a>
                </div>
                {error && <p className={styles.error} style={{ color: 'red' }}>{error}</p>}
                <button type="submit" className={styles.loginButton}>Sign up</button>
            </form>
        </div>
    </div>
    )
} 

export default Register; 





