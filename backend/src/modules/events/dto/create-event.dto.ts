import { IsString, IsNotEmpty, IsDateString, IsNumber, Min, IsOptional, IsUrl, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsDateString()
  date: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsNumber()
  @Min(1)
  @Type(() => Number)
  capacity: number;

  @IsNumber()
  @Min(0)
  @Type(() => Number)
  price: number;

  @IsUrl()
  @IsOptional()
  imageUrl?: string;
}