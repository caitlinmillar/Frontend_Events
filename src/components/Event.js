const Event = ({event}) => {
    
    return(
        <div className="Event">
            <p className="id">{event.id}</p>
            <p className="eventName">{event.eventName}</p>
            <p className="eventDescription">{event.eventDescription}</p>
            <p className="startTime">{event.startTime}</p>
            <p className="endTime">{event.endTime}</p>
            <p className="date">{event.date}</p>
            <p className="capacity">{event.capacity}</p>
        </div>
    )
}

export default Event;