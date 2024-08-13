import { useState } from "react";
import { Box, IconButton, Text, VStack, Image, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MdMenu, MdHome, MdPeople, MdContacts, MdReceipt, MdPerson, MdCalendarToday, MdHelpOutline,
    MdPieChart, MdTimeline, MdMap } from "react-icons/md";
import { FaExclamation } from "react-icons/fa";

import user from "../../src/assets/sundar.png"



const SidebarItem = ({ title, to, icon, selected, setSelected }) => {
    return (
        <Link to={to}>
            <Box
                p={4}
                mb={2}
                borderRadius="md"
                bg={selected === title ? "white" : "#83b7ac"}
                color={selected === title ? "#83b7ac" : "white"}
                display="flex"
                alignItems="center"
                _hover={{ bg: "white", color: "#83b7ac" }}
                onClick={() => setSelected(title)}
            >
                {icon}
                <Text ml={4}>{title}</Text>
            </Box>
        </Link>
    );
};

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box
            width={isCollapsed ? "80px" : "250px"}
            height="100vh"
            bg="#83b7ac"
            color="white"
            p={4}
            position="fixed"
        >
            <IconButton
                icon={<MdMenu />}
                aria-label="Toggle menu"
                onClick={() => setIsCollapsed(!isCollapsed)}
                mb={4}
                variant="outline"
                colorScheme="black"
            />
            {!isCollapsed && (
                <>
                    <Box mb={6} textAlign="center">
                        <Image
                            borderRadius="full"
                            boxSize="100px"
                            src={user}
                            alt="Profile"
                            mx="auto"
                            mb={2}
                        />
                        <Text fontSize="lg" fontWeight="bold">Sundar Gurung</Text>
                        <Text fontSize="sm" color="white">sundargurung360@gmail.com</Text>
                    </Box>
                    <Divider mb={4} />
                </>
            )}
            <VStack spacing={2} align="stretch">
                <SidebarItem
                    title="Dashboard"
                    to="/"
                    icon={<MdHome />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <SidebarItem
                    title="Manage Team"
                    to="/team"
                    icon={<MdPeople />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <SidebarItem
                    title="Contacts Information"
                    to="/contacts"
                    icon={<MdContacts />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <SidebarItem
                    title="Invoices Balances"
                    to="/invoices"
                    icon={<MdReceipt />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Text fontSize="sm"
                      color="gray.400" mt={4} mb={2} ml={4}>
                    Pages
                </Text>
                <SidebarItem
                    title="Profile Form"
                    to="/form"
                    icon={<MdPerson />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <SidebarItem
                    title="Calendar"
                    to="/calendar"
                    icon={<MdCalendarToday />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <SidebarItem
                    title="Help"
                    to="/help"
                    icon={<MdHelpOutline />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Text fontSize="sm" color="gray.400" mt={4} mb={2} ml={4}>
                    Charts
                </Text>
                <SidebarItem
                    title="Vital Task"
                    to="/bar"
                   icon={ <FaExclamation size={24}  color="white" />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <SidebarItem
                    title="Pie Chart"
                    to="/pie"
                    icon={<MdPieChart />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <SidebarItem
                    title="Line Chart"
                    to="/line"
                    icon={<MdTimeline />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <SidebarItem
                    title="Geography Chart"
                    to="/geography"
                    icon={<MdMap />}
                    selected={selected}
                    setSelected={setSelected}
                />
            </VStack>
        </Box>
    );
};

export default Sidebar;
