import { Collapse, Carousel } from 'antd';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import { Link } from 'react-router-dom';
import Event from './Event';
import pic1 from "./merchImages/1.png";
import pic2 from "./merchImages/2.png";
import pic3 from "./merchImages/3.png";
import pic4 from "./merchImages/4.png";

const contentStyle = {
    margin: 0,
    height: '260px',
    color: '#fff',
    lineHeight: '260px',
    textAlign: 'center',
    background: '#364d79',
  };

  const images = [
    {"id" : 1, "url": pic1},
    {"id" : 2, "url": pic2},
    {"id" : 3, "url": pic3},
    {"id" : 4, "url": pic4},
]

const CarouselList = () => {

    // const carouselMap = events.slice(0, 4).map((event, id) => {
    // return <Event event = {event} key={id} name = {event.eventName}/>
    // })
    
    const onChange = (currentSlide) => {
        console.log(currentSlide);

    }

    
    return (
        <>
        <Carousel afterChange={onChange}>
        <div>
            
            <h3 style={contentStyle}>
                <Link to="/merch"><img src={pic1}/> </Link>
                </h3>
               
        </div>
        <div>
            <h3 style={contentStyle}><img src={pic2}/></h3>
        </div>
        <div>
            <h3 style={contentStyle}><img src={pic3}/></h3>
        </div>
        <div>
            <h3 style={contentStyle}><img src={pic4}/></h3>
        </div>
        </Carousel>
        </>
    )
}

export default CarouselList