export class BookingEntity {
  id: string;
  userId: string;
  eventId: string;
  quantity: number;
  status: string;  // Changed from BookingStatus
  totalPrice: number;
  createdAt: Date;
  updatedAt: Date;
}