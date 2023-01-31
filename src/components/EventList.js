import Event from "./Event";
import Spotlight from "./Spotlight";

const EventList = ({ events, handleEvent}) => {

    const eventComponents = events.map((event, id) => {
        return <Event event = {event} key={id} name = {event.eventName}/>
    })
    
    
    
    return (
        <>
        {eventComponents}
        <Spotlight eventComponents={eventComponents} /> 
        </>
    )
}

export default EventList;