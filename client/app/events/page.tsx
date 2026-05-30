'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Star } from 'lucide-react';
import api from '../../services/api';
import type { Event } from '../../types';

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const events = await api.get<Event[]>('/events');
        setEvents(events);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load events.');
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#670626]">Events</p>
          <h1 className="mt-3 text-4xl font-bold text-white">Choose an event</h1>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Browse the latest events, then click a card to see the full event details.
          </p>
        </div>

        {loading ? (
          <div className="rounded-[28px] border border-gray-700 bg-[#1a1a1a] p-8 text-center text-gray-400">
            Loading events...
          </div>
        ) : error ? (
          <div className="rounded-[28px] border border-red-700 bg-[#1a1a1a] p-8 text-center text-red-300">
            {error}
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-2">
            {events.map((event) => (
              <Link
                key={event.id}
                href={`/events/${event.id}`}
                className="group block rounded-[28px] border border-gray-700 bg-[#1a1a1a] p-8 transition hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">{new Date(event.date).toLocaleDateString()}</p>
                    <h2 className="mt-3 text-2xl font-bold text-white">{event.title}</h2>
                    <p className="mt-3 text-sm text-gray-400">{event.description ?? 'No description available.'}</p>
                  </div>
                  <div className="rounded-full bg-[#670626] px-6 py-3 text-sm font-semibold text-white whitespace-nowrap">
                    View details
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-[#670626]" />
                    <span>{event.price ? `₦${event.price.toLocaleString()}` : 'Free'}</span>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-white">{new Date(event.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                    <p>{event.location}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

