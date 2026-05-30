'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ProtectedRoute from "../../components/ProtectedRoute";
import api from "../../services/api";
import type { Event } from "../../types";

const movieNight = "/images/movie.jpg";
const picnicFriends = "/images/picnic.jpg";
const techSummit = "/images/tech.jpg";

export default function Dashboard() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [events, setEvents] = useState<Event[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [eventsData, bookingsData] = await Promise.all([
          api.get<Event[]>('/events'),
          api.get<any[]>('/bookings'),
        ]);
        setEvents(eventsData);
        setBookings(bookingsData);
      } catch (error) {
        console.error('Failed to fetch dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const totalEvents = events.length;
  const myBookings = bookings.length;
  const futureEvents = events.filter(event => new Date(event.date) > new Date()).length;

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/events?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

    return (
      <ProtectedRoute>
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          backgroundColor: "white",
        }}
      >

      <div style={{width:"250px",
                   backgroundColor: "#670626",
                   padding: "20px",
                   color: "white",
                   textAlign: "center",
        }}>

        <p
  style={{
    margin: "15px 0",
    padding: "10px",
    borderRadius: "8px",
    backgroundColor: "#f9cbd6",
    color: "#670626",
    fontWeight: "bold",
    cursor: "pointer",
  }}
>
  Dashboard
</p>
        <Link
          href="/dashboard/profile"
          style={{
            display: "block",
            margin: "15px 0",
            color: "white",
            textDecoration: "none",
          }}
        >
          Profile
        </Link>
        <Link
          href="/booking"
          style={{
            display: "block",
            margin: "15px 0",
            color: "white",
            textDecoration: "none",
          }}
        >
          Tickets
        </Link>
        <Link
          href="/dashboard/settings"
          style={{
            display: "block",
            margin: "15px 0",
            color: "white",
            textDecoration: "none",
          }}
        >
          Settings
        </Link>

      </div>

      <div
        style={{
          flex: 1,
          padding: "30px",
          paddingTop:"5px",
          backgroundColor: "#f7f7f7",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }} >

        <h1 style={{fontSize: "28px", color: "black"}}>
          Welcome to your Dashboard!
        </h1>

        <p style={{marginTop:"10px", color:"black", fontSize:"15px"}}>
          Here is an overview of events.
        </p>

        <div
  style={{
    display: "flex",
    gap: "10px",
    marginTop: "20px",
    alignItems: "center",
  }}
>
  <input
    type="text"
    placeholder="Search events"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    onKeyPress={handleKeyPress}
    style={{
      padding: "8px",
      width: "300px",
      color:"grey",
      borderRadius: "25px",
      border: "1.3px solid #670626",
      outline: "none",
    }}
  />

  <button
    onClick={handleSearch}
    style={{
      padding: "8px 15px",
      borderRadius: "25px",
      border: "none",
      backgroundColor: "#670626",
      color: "white",
      cursor: "pointer",
    }}
  >
    Search
  </button>
</div>

        

        <div
          style={{
            display:"flex",
            gap:"50px",
            marginTop:"30px",
            justifyContent:"center",
            alignItems:"center",
            maxWidth:"700px",
            flexWrap:"wrap",
          }}
        >

          <div style={{
            backgroundColor:"#f9cbd6",
            padding:"50px",
            borderRadius:"10px",
            width:"200px",
            textAlign:"center",
            marginTop:"20px",
            color:"#670626",
            border:"1.5px solid #670626",
          }}>
            <h3 style={{fontSize:"25px"}}>Total Events</h3>
            <p style={{fontSize:"20px"}}>{loading ? '...' : totalEvents}</p>

             <Link
               href="/events"
               style={{marginTop:"8px", display:"inline-flex", padding:"6px 10px", borderRadius:"8px", backgroundColor:"#670626", color:"white", textDecoration:"none", justifyContent:"center"}}
             >
               View
             </Link>
          </div>

          <div style={{
            backgroundColor:"#f9cbd6",
            padding:"50px",
            borderRadius:"10px",
            width:"200px",
            textAlign:"center",
            marginTop:"20px",
            color:"#670626",
            border:"1.5px solid #670626",
          }}>
            <h3 style={{fontSize:"25px"}}>My bookings</h3>
            <p style={{fontSize:"20px"}}>{loading ? '...' : myBookings}</p>

             <Link
               href="/booking"
               style={{marginTop:"8px", display:"inline-flex", padding:"6px 10px", borderRadius:"8px", backgroundColor:"#670626", color:"white", textDecoration:"none", justifyContent:"center"}}
             >
               View
             </Link>
          </div>

          <div style={{
            backgroundColor:"#f9cbd6",
            padding:"50px",
            borderRadius:"10px",
            width:"200px",
            textAlign:"center",
            marginTop:"20px",
            color:"#670626",
            border:"1.5px solid #670626",
          }}>

            <h3 style={{fontSize:"25px"}}>Future Events</h3>
            <p style={{fontSize:"20px"}}>{loading ? '...' : futureEvents}</p>

            <Link
              href="/events"
              style={{marginTop:"8px", display:"inline-flex", padding:"6px 10px", borderRadius:"8px", backgroundColor:"#670626", color:"white", textDecoration:"none", justifyContent:"center"}}
            >
                View
            </Link>
          </div>

        </div>

        <h1 style={{
          fontSize:"35px",
          color:"#670626",
          marginTop:"40px",
          alignSelf:"flex-start",
        }}>
          Recent Events
        </h1>

        
        <div
          style={{
            display:"flex",
            gap:"20px",
            marginTop:"20px",
            flexWrap:"wrap",
            justifyContent:"center",
          }}
        >

          
          <div style={{
            width:"250px",
            backgroundColor:"#f9cbd6",
            borderRadius:"15px",
            border:"1.3px solid #670626",
            overflow:"hidden",
            textAlign:"left",
          }}>
            <div style={{ position: "relative", width: "100%", height: "160px" }}>
              <Image src={movieNight} alt="Movie Night" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{padding:"12px"}}>
              <h3 style={{color:"#670626", margin:"0"}}>Movie Night</h3>
              <p style={{fontSize:"12px"}}>15 Jun 2026 • 8:00 PM</p>
              <Link
                href="/events/event-movie-night"
                className="rounded-full bg-[#670626] px-4 py-2 text-xs font-semibold text-white whitespace-nowrap"
              >
                View details
              </Link>
            </div>
          </div>

       
          <div style={{
            width:"250px",
            backgroundColor:"#f9cbd6",
            borderRadius:"15px",
            border:"1.3px solid #670626",
            overflow:"hidden",
            textAlign:"left",
          }}>
            <div style={{ position: "relative", width: "100%", height: "160px" }}>
              <Image src={picnicFriends} alt="Picnic with Friends" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{padding:"12px"}}>
              <h3 style={{color:"#670626", margin:"0"}}>Picnic with Friends</h3>
              <p style={{fontSize:"12px"}}>20 Jun 2026 • 12:00 PM</p>
              <Link
                href="/events/event-picnic-with-friends"
                className="rounded-full bg-[#670626] px-4 py-2 text-xs font-semibold text-white whitespace-nowrap"
              >
                View details
              </Link>
            </div>
          </div>

         
          <div style={{
            width:"250px",
            backgroundColor:"#f9cbd6",
            borderRadius:"15px",
            border:"1.3px solid #670626",
            overflow:"hidden",
            textAlign:"left",
          }}>
            <div style={{ position: "relative", width: "100%", height: "160px" }}>
              <Image src={techSummit} alt="Tech Summit" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{padding:"12px"}}>
              <h3 style={{color:"#670626", margin:"0"}}>Tech Summit</h3>
              <p style={{fontSize:"12px"}}>10 Jul 2026 • 9:00 AM</p>
              <Link
                href="/events/event-tech-summit"
                className="rounded-full bg-[#670626] px-4 py-2 text-xs font-semibold text-white whitespace-nowrap"
              >
                  View details
              </Link>
            </div>
          </div>

        </div>



<h1 style={{
  color: "#670620",
  fontSize:"35px",
  marginTop:"30px",
  alignSelf:"flex-start",
}}
>
  Notifications
</h1>


<div
  style={{
    width: "100%",
    maxWidth: "700px",
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  }}
>

 
  <div
    style={{
      backgroundColor: "#ffffff",
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "12px 15px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <div style={{ textAlign: "left" }}>
      <h4 style={{ margin: "0", color: "#670626" }}>
        Booking Confirmed
      </h4>
      <p style={{ margin: "5px 0", fontSize: "12px", color: "#555" }}>
        Your ticket for Movie Night has been confirmed.
      </p>
    </div>

    <span style={{ fontSize: "12px", color: "#999" }}>
      2h ago
    </span>
  </div>

  
  <div
    style={{
      backgroundColor: "#ffffff",
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "12px 15px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <div style={{ textAlign: "left" }}>
      <h4 style={{ margin: "0", color: "#670626" }}>
        New Event Added
      </h4>
      <p style={{ margin: "5px 0", fontSize: "12px", color: "#555" }}>
        Tech Summit has been added to your dashboard.
      </p>
    </div>

    <span style={{ fontSize: "12px", color: "#999" }}>
      1d ago
    </span>
  </div>

  
  <div
    style={{
      backgroundColor: "#ffffff",
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "12px 15px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <div style={{ textAlign: "left" }}>
      <h4 style={{ margin: "0", color: "#670626" }}>
        Reminder
      </h4>
      <p style={{ margin: "5px 0", fontSize: "12px", color: "#555" }}>
        Picnic with Friends starts tomorrow.
      </p>
    </div>

    <span style={{ fontSize: "12px", color: "#999" }}>
      3d ago
    </span>
  </div>

</div>
      </div>
      </div>
      </ProtectedRoute>
    );
}
