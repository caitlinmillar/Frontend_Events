import { Link } from "react-router-dom";
import carshow from "./assets/carshow.jpg";
import pizza from "./assets/pizza.jpg";

const imageList = [{"id": 1, "url": "https://placebear.com/100/100" }
,{"id": 2, "url": "https://static.designmynight.com/uploads/2022/02/painting-class-london-1-optimised.jpg"},
{"id": 3, "url": pizza},
{"id": 4, "url": carshow},
{"id": 5, "url": "https://adult.activatelearning.ac.uk/app/uploads/2021/03/gen_news_pottery-and-ceramics-classes-scaled.jpg"},
{"id": 6, "url": "https://cloudfront-us-east-1.images.arcpublishing.com/sltrib/YWG6CZK4CVCENJEMKWVF63KNHM.JPG"},
{"id": 7, "url": "https://woollycastle.ie/pub/media/magefan_blog/needlework-4639828_1280_1_.jpg"},
{"id": 8, "url": "https://swimnorthwest.org/wp-content/uploads/2018/06/79.jpg"},
{"id": 9, "url": "https://tariqramadan.com/english/wp-content/uploads/sites/9/2016/04/islam-in-europe-full-head-to-hea.jpg"},
{"id": 10, "url": "https://eu-assets.simpleview-europe.com/conwy2019/imageresizer/?image=%2Fdmsimgs%2FGwrych_Ghost_Tours_2022_558241691.jpg&action=ProductDetailProFullWidth"},
{"id": 11, "url": "https://pbs.twimg.com/media/FhnnX7EXgAIvFeo.jpg:large"},

]



const Event = ({event, id}) => (
    <div className="Event">
         {/* <img src={imageList[event.id].url}/> */}
        <button>
            <Link className="show-btn" to={`/events/${event.id}`}>
                <img src={imageList[event.id].url}/>
            </Link>
        </button>
        <p className="eventName">{event.eventName}</p>

    </div>
)

export default Event;