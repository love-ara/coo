import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import {Header, Sidebar} from "../components";
import Dashboard from "../components/Dashboard";

const Home = () => {
    return (
        <Flex gap={3}>
            <Box display={{ md: "flex", base: "none" }} width="300px">
                <Sidebar />
            </Box>
            {/*<Box className="navBar" marginRight="15px">*/}
                <Header />
                <Box className="header" marginRight="15px">

                    <Dashboard />
                </Box>
        </Flex>
);
};

export default Home;
