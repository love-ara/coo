import { Box, Button, Center, Flex, Stack, Text, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";
import { FcGoogle } from "react-icons/fc";
import bg from "../../src/assets/istock.png";
import iStockSignUp from "../../src/assets/signup.png";
import iStockLogin from "../../src/assets/login.png";
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
                bgImage={`url(${signup ? bg : bg})`}
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
            <Flex
                bg="white"
                borderRadius="md"
                boxShadow="xl"
                width={{ base: "90%", md: "800px" }}
                maxW="95%"
                zIndex={3}
                position="relative"
                p={6}
                justifyContent="space-between"
            >
                {signup ? (
                    <>
                        <Box
                            width="50%"
                            display={{ base: "none", md: "block" }}
                            textAlign="center"
                        >
                            <Image
                                src={iStockSignUp}
                                alt="Sign Up Image"
                                boxSize="500px"
                                objectFit="cover"
                            />
                        </Box>
                        <Center
                            width="50%"
                            bg="white"
                            borderRadius="md"
                            justifyContent="center"
                        >
                            <Stack
                                align="center"
                                justify="center"
                                direction="column"
                                gap={3}
                            >
                                <Text
                                    color="black"
                                    fontSize="3xl"
                                    fontWeight="bold"
                                >
                                    Sign up
                                </Text>
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    gap={3}
                                    width="100%"
                                >
                                    <Button
                                        leftIcon={<FcGoogle size={20} />}
                                        bg="blackAlpha.200"
                                        width="300px"
                                        _hover={{ bg: "blackAlpha.100" }}
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
                                <Signup signup={signup} loading={loading} />
                                <Button
                                    color="blackAlpha.700"
                                    fontSize={13}
                                    textTransform="uppercase"
                                    _hover={{ color: "blue.400" }}
                                    onClick={() => setSignup(!signup)}
                                >
                                    Already have an account? Login
                                </Button>
                            </Stack>
                        </Center>
                    </>
                ) : (
                    <>
                        <Center
                            width="50%"
                            bg="white"
                            borderRadius="md"
                            justifyContent="center"
                        >
                            <Stack
                                align="center"
                                justify="center"
                                direction="column"
                                gap={3}
                            >
                                <Text
                                    color="black"
                                    fontSize="3xl"
                                    fontWeight="bold"
                                >
                                    Log in
                                </Text>
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    gap={3}
                                    width="100%"
                                >
                                    <Button
                                        leftIcon={<FcGoogle size={20} />}
                                        bg="blackAlpha.200"
                                        width="300px"
                                        _hover={{ bg: "blackAlpha.100" }}
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
                                <Login signup={signup} loading={loading} />
                                <Button
                                    color="blackAlpha.700"
                                    fontSize={13}
                                    textTransform="uppercase"
                                    _hover={{ color: "blue.400" }}
                                    onClick={() => setSignup(!signup)}
                                >
                                    Don't have any account? Signup
                                </Button>
                            </Stack>
                        </Center>
                        <Box
                            width="50%"
                            display={{ base: "none", md: "block" }}
                            textAlign="center"
                        >
                            <Image
                                src={iStockLogin}
                                alt="Log In Image"
                                boxSize="500px"
                                objectFit="cover"
                            />
                        </Box>
                    </>
                )}
            </Flex>
        </Flex>
    );
};

export default Auth;
