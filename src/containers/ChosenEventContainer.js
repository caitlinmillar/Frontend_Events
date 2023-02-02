import { useState, useEffect, createRoot} from "react";
import { BrowserRouter, Routes, Route, Link, useLocation, useParams } from "react-router-dom";
import carshow from "./eventImages/carshow.jpg";
import pizza from "./eventImages/pizza.jpg";
import { Calendar,theme } from "antd";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import EventCard from "../components/EventCard";


const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

const ChosenEventContainer = () => {
    const [event, setEvent] = useState("");
    // const [countdown, setCountdown] = useState(null);
    let {id} = useParams();
    
    // useEffect(() => {
    //     fetch(`http://localhost:8080/events/` + id,{
    //         method: "GET",
    //         headers: {'Content-Type': 'application/json'}
    //     })
    //     .then(response => response.json())
    //     .then((response) => setEvent(response))
    // }, [])
    
    // useEffect(() => {
    //     fetch(`http://localhost:8080/events/days-until/` + id,{
    //         method: "GET",
    //         headers: {'Content-Type': 'application/json'}
    //     })
    //     .then(response => response.json())
    //     .then((response) => setCountdown(response))
    // }, [])
    
    useEffect(() => {
        const fetchEventData = async () =>{
        const response = await fetch(`http://localhost:8080/events/` + id);
        const event = await response.json();
        setEvent(event);
        }
        fetchEventData()
    }, [])

 
    
   

    const imageList = [{"id": 1, "url": "https://placebear.com/100/100" }
    ,{"id": 2, "url": "https://images.unsplash.com/photo-1524744608395-b474834c194b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"},
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

    // calender
    const { token } = theme.useToken();
    const wrapperStyle = {
      width: 300,
      border: `1px solid ${token.colorBorderSecondary}`,
      borderRadius: token.borderRadiusLG,
    };
    
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
                <h4 className="eventName">{event.eventName}</h4>
                <p className="date">{event.date}</p>
                <h5 className="description">{event.eventDescription}</h5>
                <p className="capacity">Capacity: {event.capacity}</p>
                <EventCard>event={countdown}
                </EventCard>
            </div>              
            </div>              

            <div className="child">
                <button className="getTicketsButton">Get tickets</button>
                <p className="location">📍 {event.eventLocation}</p>
                <p className="startTime">🕒 {event.startTime}-{event.endTime}</p>
            </div>
            <div className="calender" style={wrapperStyle}>
            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
            </div>   
            </div>

            <div className="map">
            <MapContainer center={[51.523, -0.07579]} zoom={13} >
  
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