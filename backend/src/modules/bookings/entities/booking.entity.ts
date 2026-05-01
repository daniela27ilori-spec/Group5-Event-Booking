import { BookingStatus } from '@prisma/client';

export class BookingEntity {
  id: string;
  userId: string;
  eventId: string;
  quantity: number;
  status: BookingStatus;
  totalPrice: number;
  createdAt: Date;
  updatedAt: Date;
}