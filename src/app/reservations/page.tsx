import TopSection from "@/src/app/reservations/components/TopSection/TopSection"
import MainSection from "@/src/app/reservations/components/MainSection/MainSection"
import { Flex } from "@chakra-ui/react";
import SpaceBox from "@/src/app/common/SpaceBox";

const ReservationsPage = () => {
  return <Flex flexDirection="column">
    <TopSection />
    <SpaceBox height="30px" />
    <MainSection />
  </Flex>
};

export default ReservationsPage;
