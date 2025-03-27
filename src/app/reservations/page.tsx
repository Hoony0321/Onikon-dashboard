"use client"
import TopSection from "@/src/app/reservations/components/TopSection/TopSection"
import MainSection from "@/src/app/reservations/components/MainSection/MainSection"
import { Flex } from "@chakra-ui/react";
import SpaceBox from "@/src/app/common/SpaceBox";
import { dummy_reservation_data } from "@/src/constants";
import { useEffect, useState } from "react";
import { Reservation } from "../types/Reservation";

const ReservationsPage = () => {
  const [reservations, setReservations] = useState<Reservation[]>(dummy_reservation_data.reservations as unknown as Reservation[]);
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  useEffect(() => {
    const filteredReservations = dummy_reservation_data.reservations.filter((reservation) => {
      if (selectedFilter === "All") {
        return true;
      }
      return reservation.status === selectedFilter;
    });
    setReservations(filteredReservations as unknown as Reservation[]);
  }, [selectedFilter]);

  return <Flex flexDirection="column">
    <TopSection selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter}/>
    <SpaceBox height="30px" />
    <MainSection reservations={reservations}/>
  </Flex>
};

export default ReservationsPage;
