import Event from "./Event";

const EventList = ({ events }) => {

    const eventComponents = events.map((event) => {
        return <Event event = {event} key={event.id}/>
    })

    return (
        <>
        {eventComponents}
        </>
    )
}

export default EventList;