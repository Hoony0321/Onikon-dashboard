import TopSection from "@/src/app/components/TopSection/TopSection"
import MainSection from "@/src/app/components/MainSection/MainSection"
import { Flex } from "@chakra-ui/react";
import SpaceBox from "@/src/app/common/SpaceBox";

const HomePage = () => {
  return <Flex flexDirection="column">
    <TopSection />
    <SpaceBox height="30px" />
    <MainSection />
  </Flex>
};

export default HomePage;
