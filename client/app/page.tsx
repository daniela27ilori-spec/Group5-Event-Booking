import Navbar from "../components/Navbar";
import Image from "next/image";

export default function HomePage() {

  const events = [
    {
      title: "Amapiano District",
      location: "Lagos",
      date: "June 14, 2026",
      image: "/images/Amapiano.jpg",
    },
    {
      title: "Fatherland",
      location: "Victoria Island",
      date: "July 2, 2026",
      image: "/images/Fatherland.jpg",
    },
    {
      title: "Soundcity Uni Tour",
      location: "UNILAG",
      date: "August 10, 2026",
      image: "/images/sound.jpg",
    },
    {
      title: "Asake Live in Lagos",
      location: "Eko Convention Center",
      date: "September 5, 2026",
      image: "/images/Asake.jpg",
    },
    {
      title: "Praise This",
      location: "Lekki",
      date: "October 1, 2026",
      image: "/images/praisethis.jpg",
    },
    {
      title: "Nike Art Gallery Auction",
      location: "Nike Art Gallery",
      date: "November 12, 2026",
      image: "/images/nike-arts.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-6xl font-bold">
          PikedEvents
        </h1>

        <p className="text-gray-400 mt-4 max-w-xl">
          Discover amazing experiences, concerts, and events near you.
        </p>
      </section>

      {/* Event Cards Section */}
      <section className="px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">
          Trending Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {events.map((event, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >

              {/* Event Image */}
             <div className="relative h-72 w-full overflow-hidden">
              <Image
                src={event.image}
                alt={event.title}
                fill
                quality={100}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-top hover:scale-110 transition duration-500"
              />
            </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold">
                  {event.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  {event.location}
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  {event.date}
                </p>

                <button className="mt-5 w-full bg-[#670626] hover:bg-[#8a0a35] py-2 rounded-lg">
                  Book Ticket
                </button>
              </div>

            </div>
          ))}

        </div>
      </section>

    </main>
  );
}