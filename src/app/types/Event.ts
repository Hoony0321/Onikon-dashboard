import { Location } from "@/src/app/types/Location";

export type EventStatus =
  | "NEW"
  | "OPEN"
  | "ENDING SOON"
  | "FULL"
  | "ON PROGRESS"
  | "CLOSED"
  | "PENDING"
  | "CANCELLED";

export type EventType =
  | "LECTURE"
  | "WORKSHOP"
  | "PERFORMANCE"
  | "EXHIBITION";

export const EventStatusColorMap = {
  NEW: "#3D5AFE",                  // 진한 퍼플블루
  OPEN: "#2E7D32",                 // 그린 계열 (성공)
  "ENDING SOON": "#EF6C00",        // 오렌지 계열 (주의)
  FULL: "#757575",                 // 중간 회색 (비활성)
  "ON PROGRESS": "#B28704",        // 부드러운 머스타드 옐로우
  CLOSED: "#6C757D",               // 다크 그레이 (종료 느낌)
  "PENDING": "#0277BD", // 하늘색 계열
  CANCELLED: "#D32F2F"             // 진한 레드 (취소 느낌)
};

export const EventStatusBackgroundColorMap = {
  NEW: "#D6E4FF",
  OPEN: "#D3F9D8",
  "ENDING SOON": "#FFE8CC",
  FULL: "#E0E0E0",
  "ON PROGRESS": "#FFF3BF",
  CLOSED: "#F1F3F5",
  "PENDING": "#E3F2FD",
  CANCELLED: "#FFE3E3"
};

export interface Event {
  id: string;
  title: string;
  description?: string;
  eventType: EventType;
  status: EventStatus;
  eventDate: string;
  reservationDate: string;
  location: Location;
  coordinator: {name: string, phone: string};
  capacity: number;
  reservedCount: number;
  cancelledCount?: number;
  pendingCancelCount?: number;
  memo?: string;
  isHot?: boolean;
}