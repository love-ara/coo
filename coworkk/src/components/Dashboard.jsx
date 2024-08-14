import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import TaskManager from '../components/tasks/Task';
import TaskStatus from '../components/tasks/TaskStatus';

const Dashboard = () => {

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
            {/* Text area */}
            <Box mb={135}> {/* Increased margin-bottom for more space */}
                <Text fontSize="2xl" fontWeight="bold">Hi User</Text>
            </Box>

            <Flex direction={{ base: "column", md: "row" }}
                  borderWidth="2px"
                  borderColor="grey"
                  mb={10}
                  gap={5}>
                <Box flex="3" mb={10}>
                    <TaskManager />
                </Box>

                <Box flex="1" mb={5}>
                    <Flex direction="column" gap={5}>
                        {/* Task Status */}
                        <Box mb={5} height="fit-content">
                            <TaskStatus />
                        </Box>

                        <Box
                            borderWidth="1px"
                            borderRadius="lg"
                            p={4}
                            maxW="400px"
                            bg="white"
                            height="fit-content"
                        >
                            <Heading size="lg"
                                     borderColor="grey"
                                     mb={5}>Completed Tasks</Heading>
                            {completedTasks.map((task, index) => (
                                <Box key={index}
                                     borderWidth="1px"
                                     borderRadius="lg"
                                     p={4} mb={4}
                                     borderColor="grey"
                                >
                                    <Heading size="md">{task.title}</Heading>
                                    <Text>{task.details}</Text>
                                    <Text color="gray.500">Completed: {task.completedDate}</Text>
                                </Box>
                            ))}
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
};

export default Dashboard;
