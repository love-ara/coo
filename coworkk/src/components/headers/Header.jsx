import React from 'react';
import { ChakraProvider, Box, Input, Button, Text, Flex } from '@chakra-ui/react';

function Header() {
    return (
        <ChakraProvider>
            <Box bg="#473c6b" p={5}>
                <Flex justify="space-between" align="center" mb={5}>
                    <Text fontSize="2xl" fontWeight="bold" color="#ee968d">
                        Dash<Text color="#473c6b" fontSize="2xl" fontWeight="bold">board</Text></Text>
                    <Text fontSize="lg" color="#ee968d">
                        {new Date().toLocaleDateString('en-US',
                            { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                    </Text>
                </Flex>
                <Flex>
                    <Input
                        placeholder="Search your task here..."
                        size="lg"
                        mr={2}
                        borderColor="#ee968d"
                    />
                    <Button colorScheme="#83b7ac" size="lg">
                        <Text color="#83b7ac">Search</Text>
                    </Button>
                </Flex>
            </Box>
        </ChakraProvider>
    );
}

export default Header;