export type ReservationStatus = "Pending" | "Confirmed" | "Cancelled" | "Completed" | "Requested Cancel";

export interface Reservation {
    id: string;
    name: string;
    email: string;
    phone: string;
    eventTitle: string;
    date: string;
    status: ReservationStatus;
}