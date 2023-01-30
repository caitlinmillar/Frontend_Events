import Event from "./Event";

const EventList = ({ events, handleEvent}) => {

    const eventComponents = events.map((event, id) => {
        return <Event event = {event} key={id} name = {event.eventName}/>
    })

    return (
        <>
        {eventComponents}
        </>
    )
}

export default EventList;