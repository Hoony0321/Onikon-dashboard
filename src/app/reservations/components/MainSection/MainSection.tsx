import { Flex, Text } from "@chakra-ui/react";
import SpaceBox from "@/src/app/common/SpaceBox";
import ReservationTable from "./ReservationTable";
import { Reservation } from "@/src/app/types/Reservation";

const MainSection = ({reservations}: {reservations: Reservation[]}) => {
    return <Flex flexDirection="column">
        <Text fontSize="24px" fontWeight="bold">Reservation List</Text>

        <SpaceBox height="20px" />

        <ReservationTable reservations={reservations} />
    </Flex>
}

export default MainSection;