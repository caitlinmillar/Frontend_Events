import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation, useParams } from "react-router-dom";
import carShow from "./eventImages/carshow.jpg"


const ChosenEventContainer = () => {
    const [event, setEvent] = useState("");
    let {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/events/` + id,{
            method: "GET",
            headers: {'Content-Type': 'application/json'}
        })
        .then((response) => response.json())
        .then((response) => setEvent(response))
    }, [])

   
    return(
        <>
        {event ?  
         
         <div>            
            {/* <p className="id">{id}</p> */}
            <div className="eventImage">
                <img src={carShow} alt="car show image"/>
            <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80-torres-MQUqbmszGGM-unsplash.jpg" alt="featured event" />
            </div>
            <h2 className="eventCardName">{event.eventName}</h2>
            <h4 className="description">{event.eventDescription}</h4>

            <div className="leftChild">
                <p className="date">When: {event.date}</p>
                <p className="capacity">Capacity: {event.capacity}</p>

            </div>
            <div className="leftChild">
                <button className="getTickets">Get tickets</button>
                <p className="location">📍 {event.eventLocation}</p>
                <p className="startTime">🕒 {event.startTime}-{event.endTime}</p>
            </div>
            
         
         </div> 
         :"" }

        </>
    )
}

export default ChosenEventContainer;