import { extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: "dark",
    useSystemColorMode: true,
};

export const theme = extendTheme(
    { config },
    {
        // styles: {
        //     global: () => ({
        //         body: {
        //             bg: "dark",
        //             color: "black",
        //         },
        //     }),
        // },
        fonts: {
            body: `'Poppins', sans-serif`,
        },
    }
);
