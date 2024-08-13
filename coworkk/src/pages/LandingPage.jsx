import React from "react";
import '../App.css'
import { useNavigate } from "react-router-dom";
import style from "../pages/index.module.css";
import logo from '../assets/Logo.png'
import rightIllustration from "../assets/right illustration.png"
import leftIllustration from "../assets/left illustration.png"

import {Box, Text, Heading, Button, Image} from "@chakra-ui/react";

const LandingPage = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/auth");
    };

    return (
        <>
            <div className={style.mainContainer}>
                <div className={style.navBar}>
                    <div className={style.firstNavBarSection}>
                        <img src={logo} alt={"Logo"}/>
                        <button>Product</button>
                        <button>Solutions</button>
                        <button>Resources</button>
                        <button>Enterprise</button>
                        <button>Pricing</button>
                    </div>

                    <div className={style.secondNavBarSection}>
                        <button>&#x1f310;EN</button>
                        <button>Contact Sales</button>
                        <button>Resources</button>
                        <button>Login</button>
                        <button className={style.signUpButton}><span style={{color: "white"}}>Sign up free</span></button>
                    </div>
                </div>

                <hr />

                <div className={style.mainBody}>
                    <div className={style.firstDiv}>
                        <p className={style.textHeading}>New Home for Collaboration</p>
                        <p className={style.texts}>The online collaborative whiteboard platform to bring teams together, anytime, anywhere.</p>
                        <button className={style.getStartedButton}>Get Started &#10141;</button>
                        <p className={style.creditCard}>No credit card required.</p>
                        <div>
                        <img src={leftIllustration} alt={"leftIllustration"}/>
                        </div>
                    </div>


                    <div className={style.secondDiv}>
                        <div>
                        <img src={rightIllustration} alt={"right illustration"}/>
                        </div>
                        <p className={style.textHeading}>Stay organised and connected</p>
                        <p className={style.texts}>Bring your teams work together in one shared space.</p>
                        <p className={style.texts}>Chose the project view that suits your style and collaborate no matter where you are</p>
                    </div>
                </div>

            </div>

            <Button onClick={handleLoginClick} mt='32px' colorScheme='teal' size='md'
                    variant='solid' _hover={{background: 'grey'}}>
                Login
            </Button>
        </>
    );
};

export default LandingPage;
