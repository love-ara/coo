import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { AppHeader, Header, Sidebar } from "../components";
import TaskManager from "../components/tasks/Task";
import TaskStatus from "../components/tasks/TaskStatus";

const Dashboard = () => {
    return (
            <Box className="header" marginRight="15px">
                <Header />
                {/*<AppHeader />*/}
                {/*<ToDo />*/}
                <TaskStatus />
                {/*<CompletedTasks />*/}
            </Box>
    );
};

export default Dashboard;
