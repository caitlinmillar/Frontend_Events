import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import EventList from "../components/EventList";


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

    return (
        <BrowserRouter>

            <Link to="">Home</Link>

            <Routes>
                <Route path="" element={<EventList events={events}/>} />
            </Routes>
        <h1></h1>
        </BrowserRouter>


     
    )
}

export default EventContainer;