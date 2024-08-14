import React, { useState } from 'react';
import {
    ChakraProvider,
    Box,
    Input,
    Button,
    Text,
    Flex,
    InputGroup,
    InputRightElement,
    IconButton,
} from '@chakra-ui/react';
import { SearchIcon, CalendarIcon, BellIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import SearchResults from '../search';

function Header() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const mockData = ["Task 1", "Task 2", "Important Task", "Another Task"];

    const handleSearch = () => {
        const results = mockData.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
        setSearchResults(results);
    };

    return (
        <ChakraProvider>
            <Box bg="#473c6b" p={5}>
                <Flex justify="space-between" direction="row" align="center" mb={5}>
                    <Text fontSize="2xl" fontWeight="bold">
                        <Text as="span" color="#ee968d">
                            Dash
                        </Text>
                        <Text as="span" color="orange">
                            board
                        </Text>
                    </Text>

                    <InputGroup width="300px">
                        <InputRightElement pointerEvents="none">
                            <SearchIcon color="#ee968d" />
                        </InputRightElement>
                        <Input
                            placeholder="Search your task here..."
                            size="xl"
                            borderColor="#ee968d"
                            _hover={{ borderColor: "#ee968d" }}
                            _focus={{ borderColor: "#ee968d", boxShadow: "none" }}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </InputGroup>
                    <Button
                        // onClick={handleSearch}
                        colorScheme="teal"
                        ml={3}
                        size="lg"
                        _hover={{ bg: "teal.600" }}
                        _active={{ bg: "teal.700" }}
                    >
                        <Text color="white">Search</Text>
                    </Button>

                    <Flex align="center" ml={5}>
                        <IconButton
                            aria-label="Notifications"
                            icon={<BellIcon />}
                            size="lg"
                            colorScheme="teal"
                            variant="outline"
                        />
                        <Link to="/calendar">
                            <IconButton
                                aria-label="Calendar"
                                icon={<CalendarIcon />}
                                size="lg"
                                ml={3}
                                colorScheme="teal"
                                variant="outline"
                            />
                        </Link>
                    </Flex>

                    <Text fontSize="lg" color="#ee968d">
                        {new Date().toLocaleDateString('en-US',
                            { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                    </Text>
                </Flex>

                {searchResults.length > 0 && <SearchResults results={searchResults} />}
            </Box>
        </ChakraProvider>
    );
}

export default Header;
