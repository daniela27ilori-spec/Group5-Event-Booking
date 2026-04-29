import { BookingEntity } from '../entities/booking.entity';
import { Booking } from '@prisma/client';

export class BookingMapper {
  static toEntity(prismaBooking: Booking): BookingEntity {
    return {
      id: prismaBooking.id,
      userId: prismaBooking.userId,
      eventId: prismaBooking.eventId,
      quantity: prismaBooking.quantity,
      status: prismaBooking.status,
      totalPrice: prismaBooking.totalPrice,
      createdAt: prismaBooking.createdAt,
      updatedAt: prismaBooking.updatedAt,
    };
  }
}