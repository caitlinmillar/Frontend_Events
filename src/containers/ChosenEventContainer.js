import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation, useParams } from "react-router-dom";
import paint from "./eventImages/paint.jpg";
import carshow from "./eventImages/carshow.jpg";
import pizza from "./eventImages/pizza.jpg";



const ChosenEventContainer = () => {
    const [event, setEvent] = useState("");
    let {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/events/` + id,{
            method: "GET",
            headers: {'Content-Type': 'application/json'}
        })
        .then((response) => response.json())
        .then((response) => setEvent(response))
    }, [])

    const imageList = [{"id": 1, "url": "https://placebear.com/100/100" }
    ,{"id": 2, "url": paint},
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
         
         <div>            
            {/* <p className="id">{id}</p> */}
            <div className="eventImage">
            <img src={imageList[event.id].url} alt="featured event" />
            </div>
            <h2 className="eventCardName">{event.eventName}</h2>
            <h4 className="description">{event.eventDescription}</h4>

            <div className="leftChild">
                <p className="date">When: {event.date}</p>
                <p className="capacity">Capacity: {event.capacity}</p>
            </div>
            <div className="leftChild">
                <button className="getTicketsButton">Get tickets</button>
                <p className="location">📍 {event.eventLocation}</p>
                <p className="startTime">🕒 {event.startTime}-{event.endTime}</p>
            </div>
            
         
         </div> 
         :"" }

        </>
    )
}

export default ChosenEventContainer;