import React from "react";
import '../App.css'
import { useNavigate } from "react-router-dom";
import style from "../pages/index.module.css";
import logo from '../img.png'

import {Box, Text, Heading, Button, Image} from "@chakra-ui/react";

const LandingPage = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/auth");
    };

    return (
        <>
            <Box
                display='flex'
                 flexDirection="column"
                 alignItems='center'
                 justifyContent='center'
                //  py={200}
                // px={400}
                 mb={2}
                pos='absolute'
                 bgPosition='center'
                 // bg="white"
            >
                <Image
                    src={logo} alt='logo'
                    boxSize='50px'
                />
                <Heading as="h1" color="black">
                    Welcome to CoWorkk!
                </Heading>
                <Text fontSize="32px" color="black">Log in to do more!</Text>

                <Button onClick={handleLoginClick} mt='32px' colorScheme='teal' size='md'
                        variant='solid' _hover={{background: 'grey'}}>
                    Login
                </Button>
            </Box>

        </>
    );
};

export default LandingPage;
