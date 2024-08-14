import React from 'react';
import {
    Box,
    Heading,
    Text,
    Badge,
    Progress,
    VStack,
    HStack,
    Button, Flex,
} from '@chakra-ui/react';

const TaskManager = () => {
    const tasks = [
        {
            title: "Attend Nischal's Birthday Party",
            details: "Buy gifts from the bakery. (6 PM | Fresh Elements...)",
            priority: "Moderate",
            status: "Not Started",
            dueDate: "20/06/2023",
        },
        {
            title: "Landing Page Design for TravelDays",
            details: "Complete by the end of the day and discuss with the client before leaving.",
            priority: "High",
            status: "In Progress",
            dueDate: "20/06/2023",
        },
        {
            title: "Presentation on Final Product",
            details: "Ensure everything is functioning and all the necessities are prepared. Review the team and get the documents ready for review.",
            priority: "Low",
            status: "Completed",
            dueDate: "16/06/2023",
        },
    ];


    return (
        <Box p={5} borderWidth="1px"
             boxShadow="lg"
             borderRadius="lg"
             mb={4} maxW="400px" bg="#f5f8ff" height="100%">
            <Flex gap={5} >
                <Heading mb={5}>To-Do List</Heading>
                <Button colorScheme="teal" mb={5}>Add Task</Button>
            </Flex>

            {tasks.map((task, index) => (
                <Box key={index} borderWidth="2px" borderColor="grey" borderRadius="lg" p={4} mb={4}>
                    <Heading size="md">{task.title}</Heading>
                    <Text>{task.details}</Text>
                    <Badge colorScheme="yellow" mr={2}>{task.priority}</Badge>
                    <Text>Status: {task.status}</Text>
                    <Text>Due Date: {task.dueDate}</Text>
                </Box>
            ))}

            {/*<Heading mt={10} mb={5}>Task Status</Heading>*/}


        </Box>
    );
};

export default TaskManager;