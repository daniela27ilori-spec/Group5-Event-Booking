'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin } from 'lucide-react';
import api from '../../../services/api';
import { useAuth } from '../../../context/AuthContext';
import type { Event } from '../../../types';

export default function EventDetailPage() {
  const params = useParams();
  const id = params?.id as string | undefined;
  const router = useRouter();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [statusMessage, setStatusMessage] = useState('');
  const [bookingError, setBookingError] = useState('');
  const { isAuthenticated } = useAuth();

  const handleQuantityChange = (value: number) => {
    setQuantity(Math.max(1, value));
  };

  const handleBookEvent = async () => {
    if (!id) return;
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }

    setBookingError('');
    setStatusMessage('');

    try {
      await api.post('/bookings', { eventId: id, quantity });
      setStatusMessage('Booking created successfully. Check your bookings page.');
    } catch (err) {
      setBookingError(err instanceof Error ? err.message : 'Unable to book event.');
    }
  };

  useEffect(() => {
    if (!id) return;
    const loadEvent = async () => {
      try {
        const data = await api.get<Event>(`/events/${id}`);
        setEvent(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unable to load event.');
      } finally {
        setLoading(false);
      }
    };

    loadEvent();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Loading event details...</p>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 text-center">
        <p className="mb-6 text-red-200">{error || 'Event not found.'}</p>
        <button
          onClick={() => router.back()}
          className="rounded-full bg-[#670626] px-6 py-3 text-white"
        >
          Go back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto rounded-[28px] bg-[#1a1a1a] border border-gray-700 overflow-hidden shadow-lg">
        <div className="relative h-80 sm:h-96">
          <Image
            src={event.imageUrl ?? '/images/movie.jpg'}
            alt={event.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#FFBDC5]">Event details</p>
              <h1 className="mt-3 text-4xl font-bold text-white">{event.title}</h1>
            </div>
            <Link
              href="/events"
              className="inline-flex items-center rounded-full bg-[#670626] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#8a0a35]"
            >
              Back to events
            </Link>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.5fr_0.8fr]">
            <div className="space-y-6 text-gray-300">
              <p>{event.description ?? 'No description available for this event.'}</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-[#111111] p-6">
                  <p className="text-sm text-gray-400">Date</p>
                  <p className="mt-2 text-lg font-semibold text-white">{new Date(event.date).toLocaleDateString()}</p>
                </div>
                <div className="rounded-3xl bg-[#111111] p-6">
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="mt-2 text-lg font-semibold text-white">{event.location}</p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-gray-700 bg-[#0f0f0f] p-8 text-gray-200">
              {new Date(event.date) < new Date() ? (
                <>
                  <h2 className="text-xl font-semibold text-white">Event Status</h2>
                  <p className="mt-4 text-sm text-gray-400">This event has already passed.</p>
                  <div className="mt-8">
                    <button
                      disabled
                      className="w-full rounded-full bg-gray-600 px-5 py-3 text-white cursor-not-allowed"
                    >
                      Event passed
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-xl font-semibold text-white">Book this event</h2>
                  <p className="mt-4 text-sm text-gray-400">Tickets start at ₦{event.price.toLocaleString()}</p>
                  <div className="mt-8 space-y-4">
                    {statusMessage ? (
                      <div className="rounded-3xl bg-emerald-950/40 p-5 text-green-200">{statusMessage}</div>
                    ) : null}
                    {bookingError ? (
                      <div className="rounded-3xl bg-red-950/40 p-5 text-red-200">{bookingError}</div>
                    ) : null}
                    <div className="rounded-3xl bg-[#111111] p-5">
                      <p className="text-sm text-gray-400">Price per ticket</p>
                      <p className="mt-2 text-2xl font-semibold text-white">₦{event.price.toLocaleString()}</p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
                      <label className="block">
                        <span className="text-sm font-semibold text-gray-300">Quantity</span>
                        <input
                          type="number"
                          min={1}
                          value={quantity}
                          onChange={(e) => handleQuantityChange(Number(e.target.value))}
                          className="mt-2 w-full rounded-3xl border border-gray-700 bg-[#111111] px-4 py-3 text-white focus:border-[#670626] focus:outline-none"
                        />
                      </label>
                      <button
                        type="button"
                        onClick={handleBookEvent}
                        className="inline-flex items-center justify-center rounded-full bg-[#670626] px-5 py-3 text-white transition hover:bg-[#8a0a35]"
                      >
                        Book now
                      </button>
                    </div>
                    <button
                      onClick={() => router.push('/booking')}
                      className="w-full rounded-full bg-[#1f1f1f] px-5 py-3 text-white transition hover:bg-[#2c2c2c]"
                    >
                      View bookings
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
