import {Box, Grid, GridItem} from "@chakra-ui/react";
import React from "react";
import {  Header, Sidebar } from "../components";
import Dashboard from "../components/Dashboard";

const Home = () => {
    return (
        <Grid
            templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
            gridTemplateRows={'180px 1fr 500px'}
            gridTemplateColumns={'280px 1fr'}
            // h='200px'
            gap='0.1'
            color='blackAlpha.700'
            fontWeight='bold'
        >
            <GridItem bg='orange.300' area={'header'}>
                <Header />
            </GridItem>
            <GridItem  bg='pink.300' area={'nav'}>
                <Sidebar/>
            </GridItem>
            <GridItem bg='green.300' area={'main'}>
                <Dashboard />
            </GridItem>
            <GridItem  bg='blue.300' area={'footer'}>
                Footer
            </GridItem>
        </Grid>
    );
};

export default Home;
