import { useState, useEffect, createRoot} from "react";
import { BrowserRouter, Routes, Route, Link, useLocation, useParams } from "react-router-dom";
import carshow from "./eventImages/carshow.jpg";
import pizza from "./eventImages/pizza.jpg";
import { Calendar,theme } from "antd";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';


// ---- EVENT ------
// Event: useState
    const ChosenEventContainer = () => {
        const [event, setEvent] = useState("");
        let {id} = useParams();
    
// Event: useEffect Fetch for Event by Id    
    useEffect(() => {
        fetch(`http://localhost:8080/events/` + id,{
            method: "GET",
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then((response) => setEvent(response))
    }, [])
    
// ---- COUNTDOWN ------
// Countdown useState
    const [countdown, setCountdown] = useState(null);
// Countdown useEffect Fetch from API    
    useEffect(() => {
        fetch(`http://localhost:8080/events/days-until/1`,{
            method: "GET",
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then((response) => setCountdown(response))
    }, [])
    
// Calendar Function
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
      };

// Calender
      const { token } = theme.useToken();
      const wrapperStyle = {
        width: 300,
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
      };

// HardCoding images to Events with an imageArray
const imageList = [{"id": 1, "url": "https://placebear.com/100/100" }
,{"id": 2, "url": "https://static.designmynight.com/uploads/2022/02/painting-class-london-1-optimised.jpg"},
{"id": 3, "url": pizza},
{"id": 4, "url": carshow},
{"id": 5, "url": "https://adult.activatelearning.ac.uk/app/uploads/2021/03/gen_news_pottery-and-ceramics-classes-scaled.jpg"},
{"id": 6, "url": "https://cloudfront-us-east-1.images.arcpublishing.com/sltrib/YWG6CZK4CVCENJEMKWVF63KNHM.JPG"},
{"id": 7, "url": "https://woollycastle.ie/pub/media/magefan_blog/needlework-4639828_1280_1_.jpg"},
{"id": 8, "url": "https://woollycastle.ie/pub/media/magefan_blog/needlework-4639828_1280_1_.jpg"},
{"id": 9, "url": "https://tariqramadan.com/english/wp-content/uploads/sites/9/2016/04/islam-in-europe-full-head-to-hea.jpg"},
{"id": 10, "url": "https://eu-assets.simpleview-europe.com/conwy2019/imageresizer/?image=%2Fdmsimgs%2FGwrych_Ghost_Tours_2022_558241691.jpg&action=ProductDetailProFullWidth"},
{"id": 11, "url": "https://pbs.twimg.com/media/FhnnX7EXgAIvFeo.jpg:large"},
]

    
return(
    <>
        {event ?  
        <div className="eventCard">            
            <h2 className="eventCardName">{event.eventName}</h2>
            <div className="eventImage">
                <img src={imageList[event.id].url} alt="featured event" />
            </div>
            <div className="parent">
                <div className="child">
                    <div className="leftChild">
                        <h3 className="eventName">{event.eventName}</h3>
                        <h5 className="description">{event.eventDescription}</h5>
                        <p className="date">{event.date}</p>
                        <p className="location">📍 {event.eventLocation}</p>
                        <p className="startTime">🕒 {event.startTime}-{event.endTime}</p>
                        <p className="capacity">Capacity: {event.capacity}</p>
                        <button className="getTicketsButton">Get tickets</button>
                        <p>{countdown}</p>
                    </div>              
                </div>              
                <div className="child">
                    <div className="calender" style={wrapperStyle}>
                        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                    </div>  
                </div>       
            </div>
            <div className="map">
                <MapContainer center={[51.523, -0.07579]} zoom={13}>    
                    <TileLayer
                        attribution='&copy; <a 
                        href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.523, -0.07579]}>
                        <Popup>
                            Location!
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div> 
         :"" }
        </>
    )
}

export default ChosenEventContainer;