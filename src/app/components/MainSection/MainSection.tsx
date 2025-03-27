'use client'
import { Flex, useBreakpointValue } from "@chakra-ui/react";
import FilterBox from "@/src/app/components/MainSection/FilterBox/FilterBox";
import TableBox from "@/src/app/components/MainSection/TableBox/TableBox";
import SpaceBox from "@/src/app/common/SpaceBox";
import { dummy_event_data } from "@/src/constants";
import { Event } from "@/src/app/types/Event";
import { useEffect, useState } from "react";

const MainSection = () => {
    const [events, setEvents] = useState<Event[]>(dummy_event_data.events as unknown as Event[]);
    const [eventStatus, setEventStatus] = useState<string | null>(null);
    const [location, setLocation] = useState<string | null>(null);
    const [eventType, setEventType] = useState<string | null>(null);
    const [filteredBy, setFilteredBy] = useState<string | null>(null);
    const isMobile = useBreakpointValue({base: true, md: false});
   

    useEffect(() => {
        const filterEvents = () => {
            const filteredEvents = dummy_event_data.events.filter((event) => {
                const isEventStatusMatched = eventStatus === "All" || eventStatus === null || eventStatus === event.status;
                const isLocationMatched = location === "All" || location === null || location === event.location;
                const isEventTypeMatched = eventType === "All" || eventType === null || eventType === event.eventType;
                
                let isFilteredByMatched = false;
                if (filteredBy === "Today Event") {
                    const today = new Date();
                    const eventDate = new Date(event.eventDate);
                    isFilteredByMatched = eventDate.toDateString() === today.toDateString();
                } else if (filteredBy === "Hot Event") {
                    isFilteredByMatched = event.isHot ?? false;
                } else if (filteredBy === "All" || filteredBy === null) {
                    isFilteredByMatched = true;
                }
    
                return isEventStatusMatched && isLocationMatched && isEventTypeMatched && isFilteredByMatched;
            });
            setEvents(filteredEvents as unknown as Event[]);
        }

        filterEvents();
    }, [eventStatus, location, filteredBy, eventType]);

    return <Flex flexDirection={isMobile ? "column" : "row"}>
        <FilterBox eventStatusState={[eventStatus, setEventStatus]} locationState={[location, setLocation]} filteredByState={[filteredBy, setFilteredBy]} eventTypeState={[eventType, setEventType]} />
        <SpaceBox width="20px" />
        <TableBox events={events} />
    </Flex>
}

export default MainSection;