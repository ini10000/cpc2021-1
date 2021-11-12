import React, {useState, useEffect} from 'react';
import '../assets/css/SignIn.css';
import {FaRegEyeSlash, FaRegEye} from 'react-icons/fa';
import Flip from 'react-reveal/Flip';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import logoPng from '../assets/images/pacesetters-set-logo.png'; 

export default function SignIn() {
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [runAnime, setRunAnime] = useState(false);

    const handleChange = (e) => {
        let value = e.target.value;
        e.target.name === "email" ? setEmailInput(value) : setPasswordInput(value);
    }
    const togglePassword = (e) => {
        setShowPassword(!showPassword)
    }
    const darkButton = (e) => {
        e.preventDefault();
        e.target.classList.toggle("dark-btn")
    }
    useEffect(() => {
        setTimeout(() => {setRunAnime(true)}, 1500)
    }, [])

    return (
        <div className="SignIn">
            <div className="signin-container">
                <nav className="signin-nav">
                    <img className="signin-nav-logo" alt="set-logo" src={logoPng}/>
                    <p className="signin-nav-header">
                        COVENANT UNIVERSITY - CLASS OF 2021
                    </p>
                </nav>

                <main className="signin-main">
                    <Fade left cascade>
                    <p className="signin-main-text1">Welcome to</p>
                    <h1 className="signin-main-text2">
                        Covenant University - Class of 2021 Yearbook
                    </h1>
                    </Fade>
                    <Bounce left when={runAnime}>
                    <p className="signin-main-text3">The Pacesetters Set</p>
                    </Bounce>
                </main>

                <Flip left>
                <div className="signin-modal">
                    <h2 className="signin-modal-header">Sign In</h2>
                    <p className="signin-modal-text">Please enter your email and password</p>
                    <form className="signin-modal-form" method="POST" action="/api/v1/user/login">
                        <input
                            className="signin-modal-email"
                            name="email"
                            type="email"
                            value={emailInput}
                            onChange={handleChange}
                            placeholder="E-mail" autofocus={runAnime ? "" : null}
                        />
                        <div className="signin-modal-password-wrapper">
                            <input
                                className="signin-modal-password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                value={passwordInput}
                                onChange={handleChange}
                                placeholder="Password"
                            />
                            {showPassword ? (
                                <FaRegEye className="show-password-icon" size={18} onClick={togglePassword}/> 
                            ) : (
                                <FaRegEyeSlash className="hide-password-icon" size={18} onClick={togglePassword}/> 
                            )}
                        </div>
                        <button className="signin-modal-submit" onClick={darkButton}>Sign In</button>
                    </form>
                </div>
                </Flip>
            </div>
        </div>
    );
}