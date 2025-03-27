import { Flex, SimpleGrid } from "@chakra-ui/react";
import EventCard from "./EventCard/EventCard";
import { Event } from "@/src/app/types/Event";

const TableBox = ({events}: {events: Event[]}) => {
    return <Flex flexDirection="column" gap="20px" width="100%">
        <SimpleGrid
            minChildWidth="300px"
            rowGap="40px"
            columnGap="15px"
            width="100%"
        >
            {events.map((event) => (
                <EventCard key={event.id} event={event} />
            ))}
        </SimpleGrid>
    </Flex>
}

export default TableBox;    