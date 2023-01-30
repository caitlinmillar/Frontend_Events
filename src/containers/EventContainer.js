import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import EventList from "../components/EventList";
import Event from "../components/Event";
import EventCard from "../components/EventCard";


const EventContainer = () => {

    const SERVER_URL = `http://localhost:8080`
    
    const [error, setError] = useState("");
    const [events, setEvents] =useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/events`)
        .then((response) => response.json())
        .then((response) => setEvents(response))
        .catch((err) => setError(err.message))
    }, [])

    // useEffect((id) => {
    //     fetch(`http://localhost:8080/events/` + id,{
    //         method: "GET",
    //         headers: {'Content-Type': 'application/json'}
    //     })
    //     .then((response) => response.json())
    //     .then((response) => {
    //         let results = [];
    //         response.results.forEach((event) => {
    //             this.events(event.id, event)
    //             this.setEvents({events})
    //             results.push(event)
    //         })
    //     })
      
    //     .catch((err) => setError(err.message))
    //     console.log({events});
    // }, [])

    // const filterEvents = (id) => {
    //     fetch(`http://localhost:8080/events/` + id)
    //     .then((response) => response.json())
    //     .then((response) => setEvents(response))
    //     };
    
    // filterEvents(1)

    return (
       <>
       <EventList events={events}/>

       </>


     
    )
    }  

export default EventContainer;