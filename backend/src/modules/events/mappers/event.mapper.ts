import { EventEntity } from '../entities/event.entity';
import { Event } from '@prisma/client';

export class EventMapper {
  static toEntity(prismaEvent: Event): EventEntity {
    return {
      id: prismaEvent.id,
      title: prismaEvent.title,
      description: prismaEvent.description,
      date: prismaEvent.date,
      location: prismaEvent.location,
      capacity: prismaEvent.capacity,
      price: prismaEvent.price,
      imageUrl: prismaEvent.imageUrl,
      organizerId: prismaEvent.organizerId,
      createdAt: prismaEvent.createdAt,
      updatedAt: prismaEvent.updatedAt,
    };
  }
}