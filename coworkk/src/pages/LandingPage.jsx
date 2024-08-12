import React from "react";
import '../App.css'
import { useNavigate } from "react-router-dom";
import style from "../pages/index.module.css";
import logo from '../img.png'

const LandingPage = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/auth");
    };

    return (
        <>
            <div className={style.container}>
                <img
                    src={logo} alt='logo' className="App-logo"
                />
                <h1 className={style.title}>
                    Welcome to CoWorkk!
                </h1>
                <p className={style.subTitle}>Log in to do more!</p>

                <button className={style.button} onClick={handleLoginClick}>
                    Login
                </button>
            </div>

        </>
    );
};

export default LandingPage;
