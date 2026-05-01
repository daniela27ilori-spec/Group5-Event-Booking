import { IsBoolean, IsNotEmpty } from 'class-validator';

export class ConfirmBookingDto {
  @IsBoolean()
  @IsNotEmpty()
  paymentConfirmed: boolean;
}