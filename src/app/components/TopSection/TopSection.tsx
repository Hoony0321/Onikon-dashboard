import Navigation from "@/src/app/components/TopSection/Navigation/Navigation"
import { Flex } from "@chakra-ui/react"
import StatsBox from "@/src/app/components/TopSection/StatsBox/StatsBox"
import SpaceBox from "@/src/app/common/SpaceBox"

const TopSection = () => {
  return (
    <Flex flexDirection="column"  w="100%" backgroundColor="#07090F" color="white" borderRadius="10px" p="30px">
      <Navigation />
      <SpaceBox height="40px" />
      <StatsBox />
    </Flex>
  );
};

export default TopSection;
