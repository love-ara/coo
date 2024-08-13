import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { AppHeader, Header, Sidebar } from "../components";

const Home = () => {
    return (
        <Flex gap={3}>
            <Box display={{ md: "flex", base: "none" }} width="300px">
                <Sidebar />
            </Box>
            <Box className="navBar" marginRight="15px">
                <Header />
                <AppHeader />
            </Box>
        </Flex>
    );
};

export default Home;
