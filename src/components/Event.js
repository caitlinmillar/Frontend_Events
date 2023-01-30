import { Link } from "react-router-dom";

const Event = ({event, id}) => {

    const handleEvent = () => {
        return (
            <div>
            <p className="id">{id}</p>
            <p className="eventDescription">{event.eventDescription}</p>
            <p className="startTime">{event.startTime}</p>
            <p className="endTime">{event.endTime}</p>
            <p className="date">{event.date}</p>
            <p className="capacity">{event.capacity}</p>
            </div>
        )}
    
    return(
        <div className="Event">
            <button 
                onClick={handleEvent}>
                <Link to={`/events/${event.id}`}>Show</Link>
            </button>
            <p className="eventName">{event.eventName}</p>
           
        </div>
    )
}

export default Event;