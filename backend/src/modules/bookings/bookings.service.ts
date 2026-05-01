import { Injectable, NotFoundException, BadRequestException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { ConfirmBookingDto } from './dto/confirm-booking.dto';

@Injectable()
export class BookingsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateBookingDto, userId: string) {
    const event = await this.prisma.event.findUnique({ where: { id: dto.eventId } });
    if (!event) throw new NotFoundException('Event not found');
    if (event.capacity < dto.quantity) throw new BadRequestException('Not enough capacity');
    const existing = await this.prisma.booking.findUnique({
      where: { userId_eventId: { userId, eventId: dto.eventId } },
    });
    if (existing) throw new BadRequestException('Already booked this event');
    const totalPrice = event.price * dto.quantity;
    return this.prisma.booking.create({
      data: {
        userId,
        eventId: dto.eventId,
        quantity: dto.quantity,
        totalPrice,
        status: 'PENDING',
      },
      include: { event: true },
    });
  }

  async findAllByUser(userId: string) {
    return this.prisma.booking.findMany({
      where: { userId },
      include: { event: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string, userId: string) {
    const booking = await this.prisma.booking.findFirst({
      where: { id, userId },
      include: { event: true },
    });
    if (!booking) throw new NotFoundException('Booking not found');
    return booking;
  }

  async confirm(id: string, dto: ConfirmBookingDto, userId: string) {
    const booking = await this.prisma.booking.findFirst({
      where: { id, userId },
      include: { event: true },
    });
    if (!booking) throw new NotFoundException('Booking not found');
    if (booking.status !== 'PENDING') throw new BadRequestException('Booking already confirmed or cancelled');
    // Simulate payment confirmation
    if (!dto.paymentConfirmed) throw new BadRequestException('Payment not confirmed');
    return this.prisma.booking.update({
      where: { id },
      data: { status: 'CONFIRMED' },
      include: { event: true },
    });
  }
}