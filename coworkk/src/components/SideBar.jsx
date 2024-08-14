import { useState } from "react";
import { Box, IconButton, Text, VStack, Avatar, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import {
    MdMenu, MdTask, MdCalendarToday, MdSettings, MdHelpOutline, MdList
} from "react-icons/md";
import { FaExclamation, FaThLarge } from "react-icons/fa";

import user from "../../src/assets/sundar.png";

const SidebarItem = ({ title, to, icon, selected, setSelected }) => {
    return (
        <MenuItem
            active={selected === title}
            style={{
                color: selected === title ? "#6870fa" : "red",
            }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Link to={to}>{title}</Link>
        </MenuItem>
    );
};

const SideBar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box
            height="100%"
            sx={{
                "& .pro-sidebar-inner": {
                    background: "blue !important",
                    // height: "100%",
                    display: "flex",
                    flexDirection: "column",
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important",
                },
                "& .pro-menu-item.active": {
                    color: "yellow !important",
                },
            }}
        >
            <Sidebar collapsed={isCollapsed}>
                <Menu iconShape="square" style={{ flexGrow: 1 }}>

                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MdMenu /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: "brown",
                        }}
                    >
                        {!isCollapsed && (
                            <Flex justify="space-between" align="center" ml="15px">
                                <Text variant="h3" color="black">
                                    Dashboard
                                </Text>
                                <IconButton
                                    aria-label="Toggle menu"
                                    icon={<MdMenu />}
                                    onClick={() => setIsCollapsed(!isCollapsed)}
                                />
                            </Flex>
                        )}
                    </MenuItem>

                    {!isCollapsed && (
                        <Box mb="25px">
                            <Flex direction="column" align="center">
                                <Avatar
                                    src={user}
                                    alt="Profile"
                                    size="xl"
                                    mb={4}
                                />
                                <Text fontSize="xl" fontWeight="bold">Sundar Gurung</Text>
                                <Text fontSize="sm">sundargurung360@gmail.com</Text>
                            </Flex>
                        </Box>
                    )}

                    <Box paddingLeft={isCollapsed ? undefined : "10%"} flexGrow={1}>
                        <VStack spacing={4} align="stretch">
                            <SidebarItem
                                title="Dashboard"
                                to="/dashboard"
                                icon={<FaThLarge />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <SidebarItem
                                title="Vital Task"
                                to="/vital"
                                icon={<FaExclamation />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <SidebarItem
                                title="My Task"
                                to="/task"
                                icon={<MdTask />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <SidebarItem
                                title="Task Categories"
                                to="/taskCategory"
                                icon={<MdList />}
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
                                title="Settings"
                                to="/settings"
                                icon={<MdSettings />}
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
                        </VStack>
                    </Box>

                </Menu>
            </Sidebar>
        </Box>
    );
};

export default SideBar;
