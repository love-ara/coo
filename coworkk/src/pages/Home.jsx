import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { Header, SideBar } from "../components";
import Dashboard from "../components/Dashboard";

const Home = () => {
    return (
        <Grid
            templateAreas={`"header header"
                            "nav main"
                            "nav main"
                            "nav footer"`}
            gridTemplateRows={'auto 1fr auto'}
            gridTemplateColumns={'280px 1fr'}   // Sidebar takes 280px, main takes the remaining space
            gap='0.1'
            color='blackAlpha.700'
            fontWeight='bold'
            height="100vh"
        >
            <GridItem bg='orange.300' area={'header'}>
                <Header />
            </GridItem>
            <GridItem bg='#f5f8ff' area={'nav'}>
                <SideBar />
            </GridItem>
            <GridItem bg='#f5f8ff' area={'main'}>
                <Dashboard />
            </GridItem>
            <GridItem bg='blue.300' area={'footer'}>
                Footer
            </GridItem>
        </Grid>
    );
};

export default Home;
