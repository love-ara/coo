import { useState } from "react";
import { Box, IconButton, Text, VStack, Image, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
    MdMenu, MdHome, MdPeople, MdContacts, MdReceipt, MdPerson, MdCalendarToday, MdHelpOutline,
    MdPieChart, MdTimeline, MdList, MdSettings
} from "react-icons/md";
import { FaExclamation } from "react-icons/fa";

import user from "../../src/assets/sundar.png"

const SidebarItem = ({ title, to, icon, selected, setSelected, isCollapsed }) => {
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
                {!isCollapsed && <Text ml={4}>{title}</Text>}
            </Box>
        </Link>
    );
};

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box
            width={isCollapsed ? "80px" : "300px"}
            height="100vh"
            bg="#83b7ac"
            color="white"
            w="280px"
            mb='2000px'
            borderRadius="lg"
            p={4}
            position="fixed"
            transition="width 0.3s"
        >
            <IconButton
                icon={<MdMenu />}
                aria-label="Toggle menu"
                onClick={() => setIsCollapsed(!isCollapsed)}
                mb={4}
                size="md"
                color="white"
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
            <Box
                height={isCollapsed ? "calc(100vh - 50px)" : "calc(100vh - 100px)"}
                overflowY="auto"
            >
                <VStack spacing={2} align="stretch">
                    <SidebarItem
                        title="Dashboard"
                        to="/dashboard"
                        icon={<MdHome />}
                        selected={selected}
                        setSelected={setSelected}
                        isCollapsed={isCollapsed}
                    />

                    <SidebarItem
                        title="Vital Task"
                        to="/vital"
                        icon={<FaExclamation size={20} color="white" />}
                        selected={selected}
                        setSelected={setSelected}
                        isCollapsed={isCollapsed}
                    />
                    <SidebarItem
                        title="Manage Team"
                        to="/team"
                        icon={<MdPeople />}
                        selected={selected}
                        setSelected={setSelected}
                        isCollapsed={isCollapsed}
                    />
                    <SidebarItem
                        title="Contacts Information"
                        to="/contacts"
                        icon={<MdContacts />}
                        selected={selected}
                        setSelected={setSelected}
                        isCollapsed={isCollapsed}
                    />
                    <SidebarItem
                        title="Task Categories"
                        to="/taskCategory"
                        icon={<MdList />}
                        selected={selected}
                        setSelected={setSelected}
                        isCollapsed={isCollapsed}
                    />
                    <Text fontSize="sm" color="teal" mt={4} mb={2} ml={4}>
                        Pages
                    </Text>
                    <SidebarItem
                        title="Profile Form"
                        to="/form"
                        icon={<MdPerson />}
                        selected={selected}
                        setSelected={setSelected}
                        isCollapsed={isCollapsed}
                    />
                    <SidebarItem
                        title="Calendar"
                        to="/calendar"
                        icon={<MdCalendarToday />}
                        selected={selected}
                        setSelected={setSelected}
                        isCollapsed={isCollapsed}
                    />
                    <SidebarItem
                        title="Settings"
                        to="/settings"
                        icon={<MdSettings />}
                        selected={selected}
                        setSelected={setSelected}
                        isCollapsed={isCollapsed}
                    />
                    <SidebarItem
                        title="Help"
                        to="/help"
                        icon={<MdHelpOutline />}
                        selected={selected}
                        setSelected={setSelected}
                        isCollapsed={isCollapsed}
                    />
                </VStack>
            </Box>
        </Box>
    );
};

export default Sidebar;
