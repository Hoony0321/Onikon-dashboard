import SpaceBox from "@/src/app/common/SpaceBox";
import { EventStatus, EventStatusBackgroundColorMap, EventStatusColorMap } from "@/src/app/types/Event";
import { Box, Circle, Flex, Text, Textarea } from "@chakra-ui/react";
import { MdPerson } from "react-icons/md";
import { Event } from "@/src/app/types/Event";
import BaseLink from "@/src/app/common/BaseLink";
interface EventCardProps {
    event: Event;
}

const EventStatusTag = ({status}: {status: EventStatus}) => {
    return (
        <Flex flexDirection="row" alignItems="center" justifyContent="center" padding="4px 12px" backgroundColor={`${EventStatusBackgroundColorMap[status]}`} borderRadius="20px" minW="60px">
            <Text fontSize="10px" fontWeight="bold" color={EventStatusColorMap[status]}>{status}</Text>
        </Flex>
    )
}

const EventCoordinatorProfile = ({coordinator}: {coordinator: {name: string, phone: string}}) => {
    return (
        
        <Flex flexDirection="row" alignItems="center">
            <Circle size="40px" bg="gray.200">
                <MdPerson size="24px" />  
            </Circle>
            <SpaceBox width="10px" />
            <Flex flexDirection="column" alignItems="flex-start">
                <Text fontSize="16px" fontWeight="bold">{coordinator.name}</Text>
                <Text fontSize="12px" fontWeight="normal" color="gray.500">{coordinator.phone}</Text>
            </Flex>
        </Flex>
    )
}

const EventCard = ({event}: EventCardProps) => {
    return <Flex flexDirection="column" padding="20px" backgroundColor="#FFFFFF" borderRadius="10px" width="100%">
        <Flex flexDirection="row" justifyContent="space-between">
            <Flex backgroundColor="gray.100" padding="4px 12px" borderRadius="20px" minW="60px">
                <Text fontSize="12px" fontWeight="bold">{event.eventType}</Text>
            </Flex>
            {event.isHot && (
                <Box
                padding="4px 12px"
                borderRadius="20px"
                maxWidth="100%"
                border="1px solid #FC0000"
              >
                <Text
                  width="100%"
                  fontSize={{ base: "10px", md: "13px" }}
                  fontWeight="semibold"
                  color="#FC0000"
                >
                  🔥 HOT
                </Text>
              </Box>
            )}
        </Flex>

        <SpaceBox height="20px" />

        <Flex flexDirection="row" justifyContent="space-between">
            <EventCoordinatorProfile coordinator={event.coordinator} />
            <EventStatusTag status={event.status} />
        </Flex>

        <SpaceBox height="20px" />

        <Text fontSize="20px" fontWeight="bold" truncate w="80%">{event.title}</Text>

        <SpaceBox height="20px" />  

        <Flex flexDirection="row" justifyContent="space-between">
            <Flex flexDirection="column" alignItems="flex-start" backgroundColor="gray.100" padding="16px" borderRadius="10px" flex="1">
                <Text fontSize="12px" fontWeight="bold" color="gray.500">📍 Location</Text>
                <SpaceBox height="4px" />
                <Text fontSize="12px" fontWeight="bold">{event.location}</Text>
            </Flex>
            <SpaceBox width="16px" />
            <Flex flexDirection="column" alignItems="flex-start" backgroundColor="gray.100" padding="16px" borderRadius="10px" flex="1">
                <Text fontSize="12px" fontWeight="bold" color="gray.500">🎉 Event Date</Text>
                <SpaceBox height="4px" />
                <Text fontSize="12px" fontWeight="bold" whiteSpace="pre-wrap">{event.eventDate}</Text>
            </Flex>
        </Flex>
        

        <SpaceBox height="20px" />

        <Flex flexDirection="row" justifyContent="space-between">
            <Text fontSize="12px" fontWeight="bold" color="gray.500">📆 Reservation Date</Text>
            <Text fontSize="12px" fontWeight="bold" whiteSpace="pre-wrap">{event.reservationDate}</Text>
        </Flex>

        <SpaceBox height="8px" />

        <Flex flexDirection="row" justifyContent="space-between">
            <Text fontSize="12px" fontWeight="bold" color="gray.500">👥 Capacity</Text>
            <Text fontSize="12px" fontWeight="bold">{event.capacity}</Text>
        </Flex>

        <SpaceBox height="8px" />

        <Flex flexDirection="row" justifyContent="space-between">
            <Text fontSize="12px" fontWeight="bold" color="gray.500">✅ Reserved</Text>
            <Text fontSize="12px" fontWeight="bold">{event.reservedCount}</Text>
        </Flex>

        <SpaceBox height="8px" />

        <Flex flexDirection="row" justifyContent="space-between">
            <Text fontSize="12px" fontWeight="bold" color="gray.500">❌ Cancelled</Text>
            <Text fontSize="12px" fontWeight="bold">{event.cancelledCount}</Text>
        </Flex>

        <SpaceBox height="8px" />

        <Flex flexDirection="row" justifyContent="space-between">
            <Text fontSize="12px" fontWeight="bold" color="gray.500">🪑 Remaining</Text>
            <Text fontSize="12px" fontWeight="bold">{event.capacity - event.reservedCount}</Text>
        </Flex>

        <SpaceBox height="20px" />

        {/* 메모 내역 */}
        
        <Textarea
        fontSize="12px"
        fontWeight="bold"
        placeholder="Memo"
        width="100%"
        height="150px"
        resize="none"
        overflowY="auto"
        />

        <SpaceBox height="20px" />


        <BaseLink href={`/reservations`}>
            <Flex flexDirection="row" alignItems="center" justifyContent="center" padding="10px 20px" backgroundColor="black" borderRadius="10px" width="100%">
                <Text fontSize="12px" fontWeight="bold" color="white">View Details</Text>
            </Flex>
        </BaseLink>
        
    </Flex>
}

export default EventCard;       