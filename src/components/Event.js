import { Link } from "react-router-dom";


const Event = ({event, id}) => (
    <div className="Event">
        <button>
            <Link className="show-btn" to={`/events/${event.id}`}>show
                {/* <img src={carshow} className="logo" alt="event image"/> */}
            </Link>
        </button>
        <p className="eventName">{event.eventName}</p>

    </div>
)

export default Event;