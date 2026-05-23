import Image from "next/image";
import Link from "next/link";
import { Star, Ticket } from "lucide-react";

const NikeArtGalleryAuctionPage = () => {
  return (
    <div className="min-h-screen bg-[#f9f7f7] px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white shadow-sm border border-gray-100 flex flex-col md:flex-row overflow-hidden rounded-[32px]">
        <div className="flex-1 p-8 md:p-12 relative">
          <div className="mb-8">
            <Image
              src="/favicon.ico"
              alt="Piked Events logo"
              width={40}
              height={40}
              className="rounded-sm"
            />
          </div>

          <p className="text-xs font-bold tracking-widest text-[#3a9668] mb-2 uppercase">Piked Events</p>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Nike Art Gallery Auction</h1>

          <div className="flex items-center gap-3 mb-8 text-gray-600">
            <Star className="w-5 h-5 text-[#3a9668]" />
            <span className="text-sm font-semibold">4.5</span>
            <span className="text-sm text-gray-500">(64 reviews)</span>
          </div>

          <button className="w-full md:w-auto bg-[#3a9668] hover:bg-[#2d7a54] text-white font-bold py-3 px-12 rounded transition-colors mb-12 uppercase tracking-wide">
            Book Tickets
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 text-gray-700">
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Date</p>
              <p className="text-sm font-bold uppercase">12 November 2026</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Time</p>
              <p className="text-sm font-bold uppercase">3:00 PM</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Venue</p>
              <p className="text-sm font-bold uppercase tracking-tight">Nike Art Gallery</p>
            </div>
          </div>

          <div className="rounded-3xl bg-[#effaf2] p-6 border border-[#d2e9d5]">
            <h2 className="text-lg font-bold text-gray-800 mb-3">Event overview</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Explore curated art collections, bid on contemporary pieces, and network with collectors at a premium gallery auction.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/events"
              className="inline-flex items-center justify-center rounded-full border border-[#3a9668] px-6 py-3 text-sm font-semibold text-[#3a9668] transition hover:bg-[#3a9668] hover:text-white"
            >
              ← Back to events
            </Link>
          </div>
        </div>

        <div className="w-full md:w-[420px] flex flex-col bg-[#f7f4f4]">
          <div className="relative h-[420px] overflow-hidden bg-black">
            <Image
              src="/images/nike-arts.jpg"
              alt="Nike Art Gallery Auction poster"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover"
            />
          </div>

          <div className="p-8 bg-white border-t border-gray-100 flex-grow">
            <h3 className="text-lg font-bold text-gray-800 mb-2">What to expect</h3>
            <p className="text-sm text-gray-600 mb-6">
              A refined gallery auction featuring emerging artists, fine art collectors, and premium presentation.
            </p>
            <div className="space-y-3">
              {[
                "Curated art previews",
                "Live auction experience",
                "Collector networking lounge",
              ].map((highlight) => (
                <div key={highlight} className="flex items-start gap-3">
                  <Ticket className="w-5 h-5 text-[#3a9668] mt-1" />
                  <p className="text-sm text-gray-600">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NikeArtGalleryAuctionPage;
