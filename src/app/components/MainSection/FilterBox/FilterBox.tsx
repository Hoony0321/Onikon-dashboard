import { Flex, Text } from "@chakra-ui/react";
import FilterOptionBox from "@/src/app/components/MainSection/FilterBox/FilterOptionBox";
import SpaceBox from "@/src/app/common/SpaceBox";

const EVENT_STATUS_OPTIONS = ["All", "NEW", "OPEN", "ENDING SOON", "FULL", "ON PROGRESS", "CLOSED", "PENDING", "CANCELLED"];
const EVENT_TYPE_OPTIONS = ["All", "LECTURE", "WORKSHOP", "PERFORMANCE", "EXHIBITION"];
const LOCATION_OPTIONS = ["All", "A Building", "B Building", "C Building", "Auditorium", "Gallery", "Small Theater", "Seminar Room 1", "Seminar Room 2"];
const FILTERED_BY_OPTIONS = ["All", "Today Event", "Hot Event"];


interface FilterBoxProps {
    eventStatusState: [
        string | null,
        React.Dispatch<React.SetStateAction<string | null>>
    ];
    locationState: [
        string | null,
        React.Dispatch<React.SetStateAction<string | null>>
    ];
    filteredByState: [
        string | null,
        React.Dispatch<React.SetStateAction<string | null>>
    ];
    eventTypeState: [
        string | null,
        React.Dispatch<React.SetStateAction<string | null>>
    ];
}

const FilterBox = ({ eventStatusState, locationState, filteredByState, eventTypeState }: FilterBoxProps) => {
    const [selectedEventStatus, setSelectedEventStatus] = eventStatusState;
    const [selectedLocation, setSelectedLocation] = locationState;
    const [selectedFilteredBy, setSelectedFilteredBy] = filteredByState;
    const [selectedEventType, setSelectedEventType] = eventTypeState;

    return <Flex flexDirection="column" padding="20px" borderRadius="10px" backgroundColor="white" minWidth="300px">
        <Text fontSize="24px" fontWeight="bold">Filter</Text>
        <FilterOptionBox title="Event Status" options={EVENT_STATUS_OPTIONS} selectedOption={selectedEventStatus} setSelectedOption={setSelectedEventStatus} />
        <SpaceBox height="30px" />
        <FilterOptionBox title="Event Type" options={EVENT_TYPE_OPTIONS} selectedOption={selectedEventType} setSelectedOption={setSelectedEventType} />
        <SpaceBox height="30px" />
        <FilterOptionBox title="Location" options={LOCATION_OPTIONS} selectedOption={selectedLocation} setSelectedOption={setSelectedLocation} />
        <SpaceBox height="30px" />
        <FilterOptionBox title="Filtered by" options={FILTERED_BY_OPTIONS} selectedOption={selectedFilteredBy} setSelectedOption={setSelectedFilteredBy} />
    </Flex>
}

export default FilterBox;