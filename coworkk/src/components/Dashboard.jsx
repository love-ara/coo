import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Header, Sidebar } from "../components";
import TaskManager from "../components/tasks/Task";
import TaskStatus from "../components/tasks/TaskStatus";
import {To_Do} from "./To_Do";

const Dashboard = () => {
    return (

            <Box>
                <Flex>
                    <Header />

                </Flex>
                <To_Do />

                <Flex>
                    <TaskStatus />

                </Flex>
                {/*<CompletedTasks />*/}
            </Box>
    );
};

export default Dashboard;
