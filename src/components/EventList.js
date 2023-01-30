const EventList = ({ events }) => {

    const eventComponents = events.map((event) => {
        return <Event event = {event} key={id}/>
    })

    return (
        <>
        {eventComponents}
        </>
    )
}