'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Calendar, MapPin, Trash2, Clock } from 'lucide-react';
import api from '../../services/api';
import ProtectedRoute from '../../components/ProtectedRoute';

interface BookingItem {
  id: string;
  quantity: number;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
  totalPrice: number;
  event: {
    id: string;
    title: string;
    date: string;
    location: string;
    imageUrl?: string;
    price: number;
  };
}

export default function BookingPage() {
  const [bookings, setBookings] = useState<BookingItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadBookings = async () => {
      try {
        const data = await api.get<BookingItem[]>('/bookings');
        setBookings(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unable to load bookings');
      } finally {
        setLoading(false);
      }
    };

    loadBookings();
  }, []);

  const handleCancelBooking = async (id: string) => {
    setError('');

    try {
      await api.patch(`/bookings/${id}/cancel`, {});
      setBookings((current) => current.filter((booking) => booking.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to cancel booking');
    }
  };

  const handleConfirmBooking = async (id: string) => {
    setError('');

    try {
      const updated = await api.patch<{ status: 'PENDING' | 'CONFIRMED' | 'CANCELLED' }>(`/bookings/${id}/confirm`, { paymentConfirmed: true });
      setBookings((current) => current.map((booking) => booking.id === id ? { ...booking, status: updated.status } : booking));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to confirm booking');
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'CONFIRMED':
        return '#670626';
      case 'PENDING':
        return '#FFBDC5';
      default:
        return '#F9CBD6';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'CONFIRMED':
        return 'Confirmed';
      case 'PENDING':
        return 'Pending';
      case 'CANCELLED':
        return 'Cancelled';
      default:
        return status;
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-black text-white">
        <div className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#670626]">
                My Bookings
              </p>
              <h1 className="mt-3 text-4xl font-bold" style={{ color: '#ffffff' }}>
                Your Events
              </h1>
              <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                View and manage all your event bookings in one place.
              </p>
            </div>

            {loading ? (
              <div className="flex justify-center py-20">
                <p className="text-gray-400">Loading bookings...</p>
              </div>
            ) : error ? (
              <div className="rounded-[28px] border border-red-400 bg-[#1a1a1a] p-10 text-center text-red-200">
                <p>{error}</p>
              </div>
            ) : bookings.length === 0 ? (
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
                    <div className="relative h-48 w-full bg-gray-800">
                      <Image
                        src={booking.event.imageUrl ?? '/images/movie.jpg'}
                        alt={booking.event.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-center"
                      />
                      <div className="absolute left-4 top-4 px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: getStatusBg(booking.status), color: booking.status === 'PENDING' ? '#670626' : '#fff' }}>
                        {getStatusLabel(booking.status)}
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <h2 className="text-2xl font-bold text-white mb-1">{booking.event.title}</h2>
                          <p
                            className="text-xs font-semibold uppercase tracking-[0.35em] px-3 py-1 rounded-full text-white w-fit"
                            style={{ backgroundColor: getStatusBg(booking.status) }}
                          >
                            {getStatusLabel(booking.status)}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-sm text-gray-400">
                          <Calendar className="w-4 h-4" style={{ color: '#670626' }} />
                          <span>{new Date(booking.event.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-400">
                          <Clock className="w-4 h-4" style={{ color: '#670626' }} />
                          <span>{new Date(booking.event.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-400">
                          <MapPin className="w-4 h-4" style={{ color: '#670626' }} />
                          <span>{booking.event.location}</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-6 border-t border-gray-700 mb-6">
                        <div>
                          <p className="text-xs text-gray-500">Tickets</p>
                          <p className="text-lg font-bold text-white">{booking.quantity}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-gray-500">Total Price</p>
                          <p className="text-lg font-bold" style={{ color: '#670626' }}>
                            ₦{booking.totalPrice.toLocaleString()}
                          </p>
                        </div>
                      </div>

                      {booking.status === 'PENDING' && (
                        <button
                          onClick={() => handleConfirmBooking(booking.id)}
                          className="w-full mb-3 flex items-center justify-center gap-2 px-4 py-3 rounded-full font-semibold text-white transition hover:opacity-90"
                          style={{ backgroundColor: '#670626' }}
                        >
                          Confirm Booking
                        </button>
                      )}

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
    </ProtectedRoute>
  );
}
