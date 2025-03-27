import { Flex, Text } from "@chakra-ui/react";
import SpaceBox from "@/src/app/common/SpaceBox";
import ReservationTable from "./ReservationTable";
const MainSection = () => {
    return <Flex flexDirection="column">
        <Text fontSize="24px" fontWeight="bold">Reservation List</Text>

        <SpaceBox height="20px" />

        <ReservationTable />
    </Flex>
}

export default MainSection;