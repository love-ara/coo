import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Header, Project, SideBar } from "../components";

const Projects = () => {
    return (
        <Flex gap={3}>
            <Box display={{ md: "flex", base: "none" }} width="300px">
                <SideBar />
            </Box>
            <Box className="navBar" marginRight="15px">
                <Header />
                <Project />
            </Box>
        </Flex>
    );
};

export default Projects;
