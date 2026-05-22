import Navbar from "../../components/Navbar";

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
        }}

      >
        <h2 style= {{margin: "15px 0"}}>Dashboard</h2>
        <p style={{margin: "15px 0"}}>Profile</p>
        <p style={{margin: "15px 0"}}>Tickets</p>
        <p style={{margin: "15px 0"}}>Settings</p>

      </div>

      <div
        style={{flex: 1,
    padding: "30px",
    paddingTop:"5px",
    backgroundColor: "white",
    minHeight: "100vh",

    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
        }} >

        <h1
          style={{fontSize: "30px",
                  color: "black",
          }}
          >
 Welcome to your Dashboard!

        </h1>
<p style= {{
  marginTop:"10px",
  color:"black",
  }}  
  >
  Here is an overview of events.</p>

        <input
        type= "text"
        placeholder="Search events"
        className="searchInput"
        style={{
          marginTop:"20px",
          padding: "8px",
          width: "300px",
          borderRadius:"25px",
          border:"1.3px solid #670626",
          outline: "none",
        }}
        ></input>

        <div
            style={{
              display: "flex",
              gap: "60px",
              marginTop: "30px",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "700px",
              marginLeft: "auto",
              marginRight: "auto",
              flexWrap: "wrap",
            }}
            > 

        <div style={{
          backgroundColor: "#f9cbd6",
          padding:"20px",
          borderRadius: "10px",
          width: "180px",
          textAlign: "center",
          marginTop: "20px",
          color: "#670626",
        }}
        >
          <h3>Total Events</h3>
          <p style={{fontSize:"25px"}}>12</p>
        </div>


        <div style={{
          backgroundColor: "#f9cbd6",
          padding:"20px",
          borderRadius: "10px",
          width: "180px",
          textAlign: "center",
          marginTop: "20px",
          color: "#670636",
        }}
        >
          <h3>My Bookings</h3>
          <p style={{fontSize:"25px"}}>12</p>
        </div>

        <div style={{
          backgroundColor: "#f9cbd6",
          padding:"20px",
          borderRadius: "10px",
          width: "180px",
          textAlign: "center",
          marginTop: "20px",
          color: "#670626",
        }}
        >
          <h3>Upcoming Events</h3>
          <p style={{fontSize:"25px"}}>12</p>
        </div>
        </div>
        
        
        </div>
        </div>
        </>
    
        )
}