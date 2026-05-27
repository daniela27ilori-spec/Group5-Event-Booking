export interface ApiResponse<T> {
  statusCode: number;
  message: string;
  data: T;
  timestamp: string;
}

export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role?: string;
}

export interface AuthPayload {
  access_token: string;
  user: User;
}

export type BookingStatus = 'PENDING' | 'CONFIRMED' | 'CANCELLED';

export interface Event {
  id: string;
  title: string;
  description?: string;
  date: string;
  location: string;
  capacity: number;
  price: number;
  imageUrl?: string;
  createdAt?: string;
  updatedAt?: string;
  organizer?: User;
}

export interface Booking {
  id: string;
  userId: string;
  eventId: string;
  quantity: number;
  status: BookingStatus;
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
  event: Event;
}
