import { Box, Button, Center, Flex, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";
import { FcGoogle } from "react-icons/fc";
import istock from "../../src/assets/istock.png"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { reset } from "../app/features/authSlice";

const Auth = () => {
    // state
    const [signup, setSignup] = useState(false);
    const { success, loading, error } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    // handle error
    useEffect(() => {
        if (success) {
            toast.success(
                signup ? "Register successfully 😎" : "Login successfully 😎"
            );
            dispatch(reset());
            if (signup) {
                setSignup(false);
            } else {
                navigate("/dashboard");
            }
        }
        if (error) {
            toast.error(error);
        }
    }, [error, success, signup, dispatch, navigate]);

    return (
        <Flex
            height="100vh"
            width="100%"
            justify="center"
            align="center"
            position="relative"
            overflow="hidden"
            bg="#ff7373"
        >
            {/* Background image and overlay */}
            <Box
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                bgImage={`url(${istock})`}
                bgSize="cover"
                bgPosition="center"
                bgRepeat="no-repeat"
                zIndex={0}
                _before={{
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    bg: "rgba(255, 115, 115, 0.4)",
                    zIndex: 1,
                }}
            />
            <Box
                position="absolute"
                top="10%"
                left="10%"
                width="200px"
                height="auto"
                zIndex={2}
            >
                <img src={istock} alt="Your Image" width="100%" />
            </Box>
            <Center
                bg="white"
                borderRadius="md"
                boxShadow="xl"
                width={{ base: "90%", md: "400px" }}
                maxW="95%"
                zIndex={3}
                position="relative"
                p={6}
            >
                <Stack
                    align="center"
                    justify="center"
                    direction="column"
                    gap={3}
                >
                    <Text color="black" fontSize="3xl" fontWeight="bold">
                        {signup ? "Sign up" : "Log in"}
                    </Text>
                    {/* Social media login */}
                    <Box
                        display="flex"
                        flexDirection="column"
                        gap={3}
                        width="100%"
                    >
                        <Button
                            leftIcon={<FcGoogle size={20}/>}
                            bg="blackAlpha.200"
                            width="300px"
                            _hover={{bg: "blackAlpha.100"}}
                            color="black"
                            px={4}
                            py={2}
                        >
                            Google
                        </Button>
                    </Box>
                    <Text
                        color="blackAlpha.500"
                        fontSize={14}
                        textTransform="uppercase"
                    >
                        or with email
                    </Text>
                    {/* Login & Signup form */}
                    {signup ? (
                        <Signup signup={signup} loading={loading}/>
                    ) : (
                        <Login signup={signup} loading={loading}/>
                    )}

                    <Button
                        color="blackAlpha.700"
                        fontSize={13}
                        textTransform="uppercase"
                        _hover={{color: "blue.400"}}
                        onClick={() => setSignup(!signup)}
                    >
                        {signup
                            ? "Already have an account? Login"
                            : "Don't have any account? Signup"}
                    </Button>
                </Stack>
            </Center>
        </Flex>
    );
};
export default Auth;