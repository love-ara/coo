import React from 'react';
import {
    Box,
    Heading,
    Text,
    Badge,
    Progress,
    VStack,
    HStack,
    Button,
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

    const completedTasks = [
        {
            title: "Walk the dog",
            details: "Take the dog to the park and bring treats.",
            completedDate: "2 days ago",
        },
        {
            title: "Conduct meeting",
            details: "Meet with the team to discuss project updates.",
            completedDate: "2 days ago",
        },
    ];

    return (
        <Box p={5}>
            <Heading mb={5}>To-Do List</Heading>
            <Button colorScheme="teal" mb={5}>Add Task</Button>
            {tasks.map((task, index) => (
                <Box key={index} borderWidth="1px" borderRadius="lg" p={4} mb={4}>
                    <Heading size="md">{task.title}</Heading>
                    <Text>{task.details}</Text>
                    <Badge colorScheme="yellow" mr={2}>{task.priority}</Badge>
                    <Text>Status: {task.status}</Text>
                    <Text>Due Date: {task.dueDate}</Text>
                </Box>
            ))}

            <Heading mt={10} mb={5}>Task Status</Heading>
            <HStack spacing={10}>
                <VStack>
                    <Text>Completed</Text>
                    <Progress value={84} colorScheme="green" width="200px" />
                </VStack>
                <VStack>
                    <Text>In Progress</Text>
                    <Progress value={46} colorScheme="yellow" width="200px" />
                </VStack>
                <VStack>
                    <Text>Not Started</Text>
                    <Progress value={20} colorScheme="red" width="200px" />
                </VStack>
            </HStack>

            <Heading mt={10} mb={5}>Completed Tasks</Heading>
            {completedTasks.map((task, index) => (
                <Box key={index} borderWidth="1px" borderRadius="lg" p={4} mb={4}>
                    <Heading size="md">{task.title}</Heading>
                    <Text>{task.details}</Text>
                    <Text color="gray.500">Completed: {task.completedDate}</Text>
                </Box>
            ))}
        </Box>
    );
};

export default TaskManager;