import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const SearchResults = ({ results }) => {
    return (
        <Box p={5} bg="#fefefe" borderRadius="8px" boxShadow="md">
            <Text fontSize="xl" fontWeight="bold">Search Results:</Text>
            {results.length === 0 ? (
                <Text>No results found.</Text>
            ) : (
                results.map((result, index) => (
                    <Box key={index} p={2} borderBottom="1px solid #ddd">
                        <Text>{result}</Text>
                    </Box>
                ))
            )}
        </Box>
    );
};

export default SearchResults;
