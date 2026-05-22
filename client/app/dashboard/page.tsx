import Navbar from "../../components/Navbar";
const picnic = "/assets/picnic.jpg";
const MovieNight = "/assets/movie.jpg";
const TechSummit = "/assets/tech.jpg";

export default function Dashboard() {
    return(
        <>
      <Navbar  />
      <div style={{display:"flex",
                   minHeight:"100vh",
                   backgroundColor: "white"
                   }} >

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
        <p style={{margin: "15px 0"}}>Profile</p>
        <p style={{margin: "15px 0"}}>Tickets</p>
        <p style={{margin: "15px 0"}}>Settings</p>

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
            <p style={{fontSize:"20px"}}>12</p>

             <button style={{marginTop:"8px", padding:"6px 10px", borderRadius:"8px", border:"none", backgroundColor:"#670626", color:"white"}}>
                View
              </button>
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
            <p style={{fontSize:"20px"}}>12</p>

             <button style={{marginTop:"8px", padding:"6px 10px", borderRadius:"8px", border:"none", backgroundColor:"#670626", color:"white"}}>
                View
              </button>
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
            <p style={{fontSize:"20px"}}>12</p>
            
            <button style={{marginTop:"8px", padding:"6px 10px", borderRadius:"8px", border:"none", backgroundColor:"#670626", color:"white"}}>
                View
              </button>
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
            <img src={picnic} style={{width:"100%", height:"120px", objectFit:"cover"}} />
            <div style={{padding:"12px"}}>
              <h3 style={{color:"#670626", margin:"0"}}>Picnic with Friends</h3>
              <p style={{fontSize:"12px"}}>12 Oct 2026 • 3:00 PM</p>
              <button style={{marginTop:"8px", padding:"6px 10px", borderRadius:"8px", border:"none", backgroundColor:"#670626", color:"white"}}>
                View
              </button>
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
            <img src={MovieNight} style={{width:"100%", height:"120px", objectFit:"cover"}} />
            <div style={{padding:"12px"}}>
              <h3 style={{color:"#670626", margin:"0"}}>Movie Night</h3>
              <p style={{fontSize:"12px"}}>15 Oct 2026 • 6:00 PM</p>
              <button style={{marginTop:"8px", padding:"6px 10px", borderRadius:"8px", border:"none", backgroundColor:"#670626", color:"white"}}>
                View
              </button>
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
            <img src={TechSummit} style={{width:"100%", height:"120px", objectFit:"cover"}} />
            <div style={{padding:"12px"}}>
              <h3 style={{color:"#670626", margin:"0"}}>Tech Summit</h3>
              <p style={{fontSize:"12px"}}>20 Oct 2026 • 10:00 AM</p>
              <button style={{marginTop:"8px", padding:"6px 10px", borderRadius:"8px", border:"none", backgroundColor:"#670626", color:"white"}}>
                View
              </button>
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
        </>
    )
}