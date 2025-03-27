import { Button, Flex, TableBody, TableCell, TableColumnHeader, TableHeader, TableRoot, TableRow } from "@chakra-ui/react"
import { dummy_reservation_data } from "@/src/constants"
import { FaEdit } from "react-icons/fa";

const ReservationTable = () => {
    const reservations = dummy_reservation_data.reservations;

    return (
        <Flex>
            <TableRoot width="100%" size="sm">
                <TableHeader>
                    <TableRow>
                        <TableColumnHeader>ID</TableColumnHeader>
                        <TableColumnHeader>Name</TableColumnHeader>
                        <TableColumnHeader>Email</TableColumnHeader>
                        <TableColumnHeader>Phone</TableColumnHeader>
                        <TableColumnHeader>Date</TableColumnHeader>
                        <TableColumnHeader>Status</TableColumnHeader>
                        <TableColumnHeader>Edit</TableColumnHeader>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {reservations.map((reservation) => (
                        <TableRow key={reservation.id}>
                            <TableCell>{reservation.id}</TableCell>
                            <TableCell>{reservation.name}</TableCell>
                            <TableCell>{reservation.email}</TableCell>
                            <TableCell>{reservation.phone}</TableCell>
                            <TableCell>{reservation.date}</TableCell>
                            <TableCell>{reservation.status}</TableCell>
                            <TableCell>
                                <Button>
                                    <FaEdit />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </TableRoot>
        </Flex>
    )
}

export default ReservationTable;