'use client';

import { useState } from 'react';
import Navbar from "../../components/Navbar";
import { Calendar, MapPin, Trash2, Clock } from 'lucide-react';

interface Booking {
  id: string;
  eventTitle: string;
  date: string;
  time: string;
  location: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  image: string;
  ticketCount: number;
  price: number;
}

const mockBookings: Booking[] = [
  {
    id: '1',
    eventTitle: 'Amapiano District',
    date: '14 June 2026',
    time: '8:00 PM',
    location: 'Tiwa Towers, Lagos',
    status: 'confirmed',
    image: '/images/amapiano.jpg',
    ticketCount: 2,
    price: 15000,
  },
  {
    id: '2',
    eventTitle: 'Asake Live in Lagos',
    date: '5 September 2026',
    time: '7:30 PM',
    location: 'Eko Convention Center',
    status: 'pending',
    image: '/images/asake.jpg',
    ticketCount: 1,
    price: 25000,
  },
  {
    id: '3',
    eventTitle: 'Fatherland: The Musical',
    date: '2 July 2026',
    time: '6:30 PM',
    location: 'Victoria Island Theater',
    status: 'confirmed',
    image: '/images/fatherland.jpg',
    ticketCount: 3,
    price: 45000,
  },
];

export default function BookingPage() {
  const [bookings, setBookings] = useState<Booking[]>(mockBookings);

  const handleCancelBooking = (id: string) => {
    setBookings(bookings.filter((booking) => booking.id !== id));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'confirmed':
        return '#670626';
      case 'pending':
        return '#FFBDC5';
      default:
        return '#F9CBD6';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#670626]">
              My Bookings
            </p>
            <h1 className="mt-3 text-4xl font-bold text-white">Your Events</h1>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              View and manage all your event bookings in one place.
            </p>
          </div>

          {/* Empty State */}
          {bookings.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="rounded-full p-8 mb-6" style={{ backgroundColor: '#F9CBD6' }}>
                <Calendar className="w-12 h-12" style={{ color: '#670626' }} />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">No bookings yet</h2>
              <p className="text-gray-400 text-center max-w-md">
                You haven't booked any events yet. Browse our events and make your first booking!
              </p>
              <a
                href="/events"
                className="mt-6 px-8 py-3 rounded-full font-semibold text-white transition hover:opacity-90"
                style={{ backgroundColor: '#670626' }}
              >
                Browse Events
              </a>
            </div>
          ) : (
            <div className="grid gap-6 lg:grid-cols-2">
              {bookings.map((booking) => (
                <div
                  key={booking.id}
                  className="group rounded-[28px] border border-gray-700 bg-[#1a1a1a] overflow-hidden transition hover:shadow-lg hover:border-gray-600"
                >
                  {/* Card Header with Image */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="text-center">
                      <div
                        className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center"
                        style={{ backgroundColor: '#F9CBD6' }}
                      >
                        <Calendar className="w-8 h-8" style={{ color: '#670626' }} />
                      </div>
                      <p className="text-sm text-gray-400">Event Ticket</p>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-8">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-white mb-1">{booking.eventTitle}</h2>
                        <p
                          className="text-xs font-semibold uppercase tracking-[0.35em] px-3 py-1 rounded-full text-white w-fit"
                          style={{ backgroundColor: getStatusBg(booking.status) }}
                        >
                          {booking.status}
                        </p>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-sm text-gray-400">
                        <Calendar className="w-4 h-4" style={{ color: '#670626' }} />
                        <span>{booking.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-400">
                        <Clock className="w-4 h-4" style={{ color: '#670626' }} />
                        <span>{booking.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-400">
                        <MapPin className="w-4 h-4" style={{ color: '#670626' }} />
                        <span>{booking.location}</span>
                      </div>
                    </div>

                    {/* Booking Info */}
                    <div className="flex justify-between items-center pt-6 border-t border-gray-700 mb-6">
                      <div>
                        <p className="text-xs text-gray-500">Tickets</p>
                        <p className="text-lg font-bold text-white">{booking.ticketCount}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">Total Price</p>
                        <p className="text-lg font-bold" style={{ color: '#670626' }}>
                          ₦{booking.price.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    {/* Cancel Button */}
                    <button
                      onClick={() => handleCancelBooking(booking.id)}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full font-semibold text-white transition hover:opacity-90"
                      style={{ backgroundColor: '#FFBDC5', color: '#670626' }}
                    >
                      <Trash2 className="w-4 h-4" />
                      Cancel Booking
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}