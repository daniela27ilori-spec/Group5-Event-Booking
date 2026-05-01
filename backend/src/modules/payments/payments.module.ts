import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import { PaystackProvider } from './providers/paystack.provider';

@Module({
  controllers: [PaymentsController],
  providers: [PaymentsService, PaystackProvider],
  exports: [PaymentsService],
})
export class PaymentsModule {}