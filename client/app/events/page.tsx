import Link from "next/link";
import { Star } from "lucide-react";

const events = [
  {
    id: "amapiano-district",
    title: "Amapiano District",
    date: "14 June 2026",
    time: "8:00 PM",
    venue: "Tiwa Towers, Lagos",
    rating: 4.9,
    description: "A high-energy Amapiano showcase with top DJs, dancers, and immersive visuals.",
  },
  {
    id: "fatherland",
    title: "Fatherland: The Musical",
    date: "2 July 2026",
    time: "6:30 PM",
    venue: "Victoria Island Theater",
    rating: 4.8,
    description: "A dramatic live musical celebrating heritage, courage, and identity.",
  },
  {
    id: "soundcity-uni-tour",
    title: "Soundcity Uni Tour",
    date: "10 August 2026",
    time: "4:00 PM",
    venue: "UNILAG Stadium",
    rating: 4.7,
    description: "Campus festival energy with rap battles, guest DJs, and the hottest Afropop acts.",
  },
  {
    id: "asake-live-lagos",
    title: "Asake Live in Lagos",
    date: "5 September 2026",
    time: "7:30 PM",
    venue: "Eko Convention Center",
    rating: 4.9,
    description: "An unforgettable concert experience featuring Asake's biggest hits and stage production.",
  },
  {
    id: "praise-this",
    title: "Praise This",
    date: "1 October 2026",
    time: "5:00 PM",
    venue: "Lekki Arena",
    rating: 4.6,
    description: "An uplifting worship concert with live gospel performances and choir sessions.",
  },
  {
    id: "nike-art-gallery-auction",
    title: "Nike Art Gallery Auction",
    date: "12 November 2026",
    time: "3:00 PM",
    venue: "Nike Art Gallery",
    rating: 4.5,
    description: "A curated art auction featuring contemporary pieces and collector networking.",
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#f9f7f7] px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#3a9668]">Events</p>
          <h1 className="mt-3 text-4xl font-bold text-gray-900">Choose an event</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Browse the latest events, then click a card to see the full event details.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {events.map((event) => (
            <Link
              key={event.id}
              href={`/events/${event.id}`}
              className="group block rounded-[28px] border border-gray-200 bg-white p-8 transition hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">{event.date}</p>
                  <h2 className="mt-3 text-2xl font-bold text-gray-900">{event.title}</h2>
                  <p className="mt-3 text-sm text-gray-600">{event.description}</p>
                </div>
                <div className="rounded-full bg-[#3a9668] px-6 py-3 text-sm font-semibold text-white whitespace-nowrap">
                  View details
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#3a9668]" />
                  <span>{event.rating}</span>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{event.time}</p>
                  <p>{event.venue}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

