import { Flex, Text } from "@chakra-ui/react";
import StatsCard from "./StatsCard";
import Spacer from "@/src/app/common/Spacer";
const StatsBox = () => {
    return (
        <Flex flexDirection="column">
            <Text fontSize="36px" fontWeight="bold">Reservation</Text>
            <Spacer height="20px" />
            <Flex flexDirection="row" gap="20px">
                <StatsCard title="New Reservations" value={60} />
                <StatsCard title="On Process" value={80} />
                <StatsCard title="Cancelled" value={12} />
                <StatsCard title="Completed" value={20} />
            </Flex>
        </Flex>
    )

}

export default StatsBox;