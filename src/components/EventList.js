import EventCard from "./Event";

const EventList = ({ events }) => {

    const eventComponents = events.map((event, id) => {
        return <EventCard event = {event} key={id} name = {event.eventName}/>
    })

    return (
        <>
        {eventComponents}
        </>
    )
}

export default EventList;