import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Box, List, ListItem, Text, useTheme, Button, useDisclosure } from "@chakra-ui/react";
import { useNavigate  } from "react-router-dom";
import Header from "../../components/headers/Header";
import { useState } from "react";
import Reminder from "../../components/reminder/Reminder";


const Calendar = () => {
    const colors = {
        green: "#fbebe7",
    };
    const [currentEvents, setCurrentEvents] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedDate, setSelectedDate] = useState(null);
    const navigate = useNavigate();

    const handleDateClick = (selected) => {
        setSelectedDate(selected);
        onOpen();
    };

    const handleEventClick = (selected) => {
        if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)) {
            selected.event.remove();
        }
    };

    const handleSaveReminder = (reminder) => {
        if (selectedDate) {
            const calendarApi = selectedDate.view.calendar;
            calendarApi.addEvent({
                id: `${selectedDate.dateStr}-${reminder.title}`,
                title: reminder.title,
                start: selectedDate.startStr,
                end: selectedDate.endStr,
                allDay: selectedDate.allDay,
                description: reminder.description,
                reminderTime: reminder.reminderTime,
            });
        }
    };

    return (
        <Box m="20px">
            <Header title="Calendar" subtitle="Full Calendar Interactive Page" />

            {/* Go Back Button */}
            <Button onClick={() => navigate(-1)} mb={4} colorScheme="teal">
                Go Back
            </Button>

            <Box display="flex" justifyContent="space-between">
                {/* CALENDAR SIDEBAR */}
                <Box
                    flex="1 1 20%"
                    backgroundColor={colors.green}
                    p="15px"
                    borderRadius="4px"
                    height="75vh"
                >
                    <Text variant="h5">Events</Text>
                    <List>
                        {currentEvents.map((event) => (
                            <ListItem
                                key={event.id}
                                sx={{
                                    backgroundColor: colors.green,
                                    margin: "10px 0",
                                    borderRadius: "2px",
                                }}
                            >
                                <Text>{event.title}</Text>
                                <Text>
                                    {formatDate(event.start, {
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric",
                                    })}
                                </Text>
                            </ListItem>
                        ))}
                    </List>
                </Box>

                {/* CALENDAR */}
                <Box flex="1 1 100%" ml="15px">
                    <FullCalendar
                        height="75vh"
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin,
                        ]}
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={(events) => setCurrentEvents(events)}
                        initialEvents={[
                            {
                                id: "12315",
                                title: "All-day event",
                                date: "2022-09-14",
                            },
                            {
                                id: "5123",
                                title: "Timed event",
                                date: "2022-09-28",
                            },
                        ]}
                    />
                </Box>
            </Box>

            <Reminder
                isOpen={isOpen}
                onClose={onClose}
                onSave={handleSaveReminder}
            />
        </Box>
    );
};

export default Calendar;
