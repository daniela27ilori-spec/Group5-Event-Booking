import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PaystackProvider } from './providers/paystack.provider';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class PaymentsService {
  constructor(
    private paystack: PaystackProvider,
    private prisma: PrismaService,
  ) {}

  async initializePayment(bookingId: string, userId: string) {
    const booking = await this.prisma.booking.findFirst({
      where: { id: bookingId, userId },
      include: { event: true },
    });
    if (!booking) throw new NotFoundException('Booking not found');
    if (booking.status !== 'PENDING') throw new BadRequestException('Booking already processed');
    
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException('User not found');
    
    const paymentUrl = await this.paystack.initializePayment({
      amount: booking.totalPrice,
      email: user.email,
      reference: `BOOK-${booking.id}-${Date.now()}`,
      metadata: { bookingId: booking.id },
    });
    return { paymentUrl, reference: paymentUrl.split('reference=')[1] };
  }

  async handleWebhook(payload: any) {
    console.log('Webhook received', payload);
    return { received: true };
  }
}