import Navigation from "@/src/app/components/TopSection/Navigation/Navigation"
import { Flex } from "@chakra-ui/react"
import SpaceBox from "@/src/app/common/SpaceBox"
import FilterNav from "./FilterNav";

const TopSection = ({selectedFilter, setSelectedFilter}: {selectedFilter: string, setSelectedFilter: (filter: string) => void}) => {
  return (
    <Flex flexDirection="column"  w="100%" backgroundColor="#07090F" color="white" borderRadius="10px" p="30px">
      <Navigation />
      <SpaceBox height="40px" />
      <FilterNav selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter}/>
    </Flex>
  );
};

export default TopSection;
