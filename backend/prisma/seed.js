require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const organizerPassword = await bcrypt.hash('Password123!', 10);
  const demoPassword = await bcrypt.hash('Demo1234!', 10);

  const organizer = await prisma.user.upsert({
    where: { email: 'organizer@pikedevents.com' },
    update: {},
    create: {
      email: 'organizer@pikedevents.com',
      password: organizerPassword,
      firstName: 'Pike',
      lastName: 'Events',
      role: 'ADMIN',
    },
  });

  await prisma.user.upsert({
    where: { email: 'demo@pikedevents.com' },
    update: {
      firstName: 'Demo',
      lastName: 'User',
      role: 'USER',
      password: demoPassword,
    },
    create: {
      email: 'demo@pikedevents.com',
      password: demoPassword,
      firstName: 'Demo',
      lastName: 'User',
      role: 'USER',
    },
  });

  const events = [
    {
      id: 'event-amapiano',
      title: 'Amapiano District Concert',
      description: 'A vibrant night of Amapiano music, DJs, and live performances.',
      date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      location: 'The Lagos Arena',
      capacity: 450,
      price: 12000,
      imageUrl: '/images/Amapiano.jpg',
    },
    {
      id: 'event-asake',
      title: 'Asake Live Lagos',
      description: 'An energetic live performance from Afrobeats superstar Asake.',
      date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
      location: 'Freedom Park, Lagos',
      capacity: 500,
      price: 9500,
      imageUrl: '/images/Asake.jpg',
    },
    {
      id: 'event-fatherland',
      title: 'Fatherland Festival',
      description: 'A panoramic festival experience with top artists, food, and art installations.',
      date: new Date(Date.now() + 18 * 24 * 60 * 60 * 1000),
      location: 'Lekki Coliseum',
      capacity: 700,
      price: 15000,
      imageUrl: '/images/Fatherland.jpg',
    },
    {
      id: 'event-nike-art-gallery-auction',
      title: 'Nike Art Gallery Auction',
      description: 'Explore contemporary art and bid on curated gallery pieces.',
      date: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000),
      location: 'Nike Art Gallery',
      capacity: 150,
      price: 5000,
      imageUrl: '/images/nike-arts.jpg',
    },
    {
      id: 'event-praise-this',
      title: 'Praise This! Worship Night',
      description: 'A soulful evening of worship, praise, and community.',
      date: new Date(Date.now() + 28 * 24 * 60 * 60 * 1000),
      location: 'Civic Centre, Lagos',
      capacity: 600,
      price: 8000,
      imageUrl: '/images/praisethis.jpg',
    },
    {
      id: 'event-soundcity-uni-tour',
      title: 'Soundcity Uni-Tour',
      description: 'A dynamic university music showcase by top artists across campuses.',
      date: new Date(Date.now() + 35 * 24 * 60 * 60 * 1000),
      location: 'University Lawn',
      capacity: 800,
      price: 6500,
      imageUrl: '/images/sound.jpg',
    },
    {
      id: 'event-movie-night',
      title: 'Movie Night',
      description: 'An evening of classic films under the stars with popcorn, drinks, and comfortable seating for a memorable movie experience.',
      date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
      location: 'Open Air Cinema',
      capacity: 200,
      price: 5000,
      imageUrl: '/images/movie.jpg',
    },
    {
      id: 'event-picnic-with-friends',
      title: 'Picnic with Friends',
      description: 'A relaxed outdoor picnic with food stalls, live acoustic music, and family-friendly activities.',
      date: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000),
      location: 'Lakeside Park',
      capacity: 150,
      price: 3500,
      imageUrl: '/images/picnic.jpg',
    },
    {
      id: 'event-tech-summit',
      title: 'Tech Summit',
      description: 'Tech Summit gathers founders, engineers, and designers for talks, panels, and networking focused on the latest in tech.',
      date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      location: 'Convention Center',
      capacity: 300,
      price: 15000,
      imageUrl: '/images/tech.jpg',
    },
  ];

  await prisma.event.deleteMany({
    where: { id: { in: ['event-art-auction', 'event-praise-night'] } },
  });

  for (const event of events) {
    await prisma.event.upsert({
      where: { id: event.id },
      update: {
        title: event.title,
        description: event.description,
        date: event.date,
        location: event.location,
        capacity: event.capacity,
        price: event.price,
        imageUrl: event.imageUrl,
      },
      create: {
        ...event,
        organizerId: organizer.id,
      },
    });
  }

  console.log('Seed completed: demo organizer and demo user created.');
  console.log('Demo login: demo@pikedevents.com / Demo1234!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
