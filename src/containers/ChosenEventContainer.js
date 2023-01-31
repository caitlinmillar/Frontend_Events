import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation, useParams } from "react-router-dom";



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
            
            <div>          
                <p className="id">{id}</p>
                <p className="eventName">{event.eventName}</p>
            </div>
            <div className="eventImage">
                <img src="./src/assets/carshow.jpg" alt="car show image"/>
            </div>
            <div className="leftChild">
                <p className="date">{event.date}</p>
                <p className="description">{event.eventDescription}</p>
            </div>
            <div className="leftChild">
                <button className="getTickets">Get tickets</button>
                <p className="startTime">{event.startTime}-{event.endTime}</p>
                <p className="capacity">Capacity: {event.capacity}</p>
            </div>
            
         
         </div> 
         :"" }

        </>
    )
}

export default ChosenEventContainer;