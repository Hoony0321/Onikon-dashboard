import SpaceBox from "../../../common/SpaceBox";
import { Flex, Text, Box } from "@chakra-ui/react";
import AddFunction from "./AddFunction";
const FilterOptions = ["All", "New", "Confirmed", "Completed", "Cancelled", "Pending", "Requested Cancel", "Requested Change"]

const FilterButton = ({text, checked, onClick}: {text: string, checked: boolean, onClick: () => void}) => {
    return (
        <Box backgroundColor={checked ? "#1D2635" : "transparent"} padding="10px 25px" borderRadius="20px" onClick={onClick} cursor="pointer">
            <Text fontSize="16px" fontWeight="bold" color={checked ? "#EEEEEE" : "#c2c2c2"}>{text}</Text>
        </Box>
    )
}

const FilterNav = ({selectedFilter, setSelectedFilter}: {selectedFilter: string, setSelectedFilter: (filter: string) => void}) => {
    return (
        <Flex flexDirection="column">
            <Text fontSize="36px" fontWeight="bold">Reservations</Text>
            <SpaceBox height="20px" />
            <Flex flexDirection="row" justifyContent="space-between">
                <Flex flexDirection="row" gap="20px">
                {FilterOptions.map((option) => (
                    <FilterButton key={option} text={option} checked={selectedFilter === option} onClick={() => setSelectedFilter(option)} />
                    ))}
                </Flex>
                <AddFunction />
            </Flex>
        </Flex>
    )
}

export default FilterNav;