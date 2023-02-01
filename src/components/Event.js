import { Link } from "react-router-dom";

const imageList = [{"id": 1, "url": "https://placebear.com/100/100" }
,{"id": 2, "url": "src/containers/eventImages/carshow.jpg"}
]



const Event = ({event, id}) => (
    <div className="Event">
         <img src={imageList[1].url}/>
        <button>
            <Link className="show-btn" to={`/events/${event.id}`}>show
            </Link>
        </button>
        <p className="eventName">{event.eventName}</p>

    </div>
)

export default Event;