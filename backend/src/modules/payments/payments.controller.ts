import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentUser } from '../../common/decorators/current-user.decorator';

@Controller('payments')
@UseGuards(JwtAuthGuard)
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('initialize')
  async initializePayment(@Body('bookingId') bookingId: string, @CurrentUser() user) {
    return this.paymentsService.initializePayment(bookingId, user.id);
  }

  @Post('webhook')
  async handleWebhook(@Body() payload: any) {
    return this.paymentsService.handleWebhook(payload);
  }
}