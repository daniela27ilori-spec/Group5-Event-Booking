import { IsString, IsNotEmpty, IsInt, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateBookingDto {
  @IsString()
  @IsNotEmpty()
  eventId: string;

  @IsInt()
  @Min(1)
  @Type(() => Number)
  quantity: number;
}