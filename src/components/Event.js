import { Link } from "react-router-dom";

const Event = ({event, id}) => {

   

    return(
        <div className="Event">
            <button>
                <Link to={`/events/${event.id}`}>Show</Link>
            </button>
            <p className="eventName">{event.eventName}</p>
           
        </div>
    )
}

export default Event;