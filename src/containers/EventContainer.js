import { useEffect, useState } from "react";
import ExpandingList from "../components/ExpandingList";

const EventContainer = ({theme}) => {

    const [error, setError] = useState("");
    const [events, setEvents] =useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/events`)
        .then((response) => response.json())
        .then((response) => setEvents(response))
        .catch((error) => setError(error.message))
    }, [])

    return (
       <div className="carousel-events">
           <ExpandingList theme={theme}  className="ExpandingList" events={events}/>
       </div>
    )
}  

export default EventContainer;