import { useState } from "react"
import Event from "./Event"

const EventCard = ({ eventName, eventDescription }) => {
    
    // console.log(eventComponents)


    return(
        <>
            {eventName}
            {eventDescription}
        </>
    )
}

export default EventCard;
