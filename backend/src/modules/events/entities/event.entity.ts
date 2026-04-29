export class EventEntity {
  id: string;
  title: string;
  description: string | null;
  date: Date;
  location: string;
  capacity: number;
  price: number;
  imageUrl: string | null;
  organizerId: string;
  createdAt: Date;
  updatedAt: Date;
}