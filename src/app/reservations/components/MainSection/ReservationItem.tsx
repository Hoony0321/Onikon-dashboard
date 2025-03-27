import { Flex, Text } from "@chakra-ui/react"
import { Reservation } from "@/src/app/types/Reservation"

interface ReservationItemProps {
    reservation: Reservation
}

const ReservationItem = ({ reservation } : ReservationItemProps) => {
    return (
        <Flex flexDirection="row" justifyContent="space-between" alignItems="center" w="100%">
            <Text>{reservation.id}</Text>
            <Text>{reservation.name}</Text>
            <Text>{reservation.email}</Text>
            <Text>{reservation.phone}</Text>
            <Text>{reservation.date}</Text>
            <Text>{reservation.status}</Text>
        </Flex>
    )
}

export default ReservationItem;