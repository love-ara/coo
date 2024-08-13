import React from 'react';
import {
    Box,
    Text,
    CircularProgress,
    CircularProgressLabel, HStack,
} from '@chakra-ui/react';

const TaskStatus = () => {
    return (
        <Box
            borderWidth={1}
            borderRadius="lg"
            p={5}
            // boxShadow="md"
            bg="white"
            maxW="400px"
            mx="auto"
        >
            <Text fontSize="xl" fontWeight="bold" mb={4} color="black">
                Task Status
            </Text>
            <HStack spacing={8}>
                <Box textAlign="center">
                    <CircularProgress value={84} color="green.400" size="100px">
                        <CircularProgressLabel fontSize="2xl" color="black">84%</CircularProgressLabel>
                    </CircularProgress>
                    <Text fontSize="1xl" color="black">Completed</Text>
                </Box>
                <Box textAlign="center">
                    <CircularProgress value={46} color="blue.400" size="100px">
                        <CircularProgressLabel fontSize="2xl" color="black">46%</CircularProgressLabel>
                    </CircularProgress>
                    <Text fontSize="1xl" color="black">In Progress</Text>
                </Box>
                <Box textAlign="center">
                    <CircularProgress value={13} color="pink" size="100px">
                        <CircularProgressLabel fontSize="2xl" color="black">13%</CircularProgressLabel>
                    </CircularProgress>
                    <Text fontSize="1xl" color="black">Not Started</Text>
                </Box>
            </HStack>
        </Box>
    );
};

export default TaskStatus;