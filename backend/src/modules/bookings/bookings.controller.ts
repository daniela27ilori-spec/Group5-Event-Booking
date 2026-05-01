import { Controller, Get, Post, Body, Param, Patch, UseGuards } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { ConfirmBookingDto } from './dto/confirm-booking.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentUser } from '../../common/decorators/current-user.decorator';

@Controller('bookings')
@UseGuards(JwtAuthGuard)
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Post()
  create(@Body() dto: CreateBookingDto, @CurrentUser() user) {
    return this.bookingsService.create(dto, user.id);
  }

  @Get()
  findAll(@CurrentUser() user) {
    return this.bookingsService.findAllByUser(user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @CurrentUser() user) {
    return this.bookingsService.findOne(id, user.id);
  }

  @Patch(':id/confirm')
  confirm(@Param('id') id: string, @Body() dto: ConfirmBookingDto, @CurrentUser() user) {
    return this.bookingsService.confirm(id, dto, user.id);
  }
}