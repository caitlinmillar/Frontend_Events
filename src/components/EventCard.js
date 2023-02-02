import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Event from "./Event"

const EventCard = ({eventName, eventDescription }) => {
        const [countdown, setCountdown] = useState(null);
        let {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/events/days-until/` + id,{
            method: "GET",
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then((response) => setCountdown(response))
    }, [])
    return(
        <div>
            {countdown}
        </div>
    )
}

export default EventCard;
