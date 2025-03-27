import { Flex, Text } from "@chakra-ui/react";

interface StatsCardProps {
    title: string;
    value: number;
}

const StatsCard = ({ title, value }: StatsCardProps) => {
    return <Flex flexDirection="column" p="20px" borderRadius="10px" backgroundColor="#1D2635" w="200px">
        <Text fontSize="16px" fontWeight="medium">{title}</Text>
        <Text fontSize="24px" fontWeight="bold">{value}</Text>
    </Flex>
}

export default StatsCard;