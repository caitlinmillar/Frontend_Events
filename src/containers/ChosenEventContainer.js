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

    // const eventInfo = ({event}) => {
            
    //     return( 
            
    //         <div>
    //         <p className="id">{id}</p>
    //         <p className="description">{event.eventDescription}</p>
    //         <p className="startTime">{event.startTime}</p>
    //         <p className="endTime">{event.endTime}</p>
    //         <p className="date">{event.date}</p>
    //         <p className="capacity">{event.capacity}</p>
    //         </div>

    //     )
    // }

    return(
        <>
        {event ?  
         <div>
         <p className="id">{id}</p>
         <p className="description">{event.eventDescription}</p>
         <p className="startTime">{event.startTime}</p>
         <p className="endTime">{event.endTime}</p>
         <p className="date">{event.date}</p>
         <p className="capacity">{event.capacity}</p>
         </div>
         :"" }

        </>
    )
}

export default ChosenEventContainer;