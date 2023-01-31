import { Collapse, Carousel } from 'antd';
import Event from './Event';

const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  


const CarouselList = ({ events }) => {

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
            <h3 style={contentStyle}>1</h3>
        </div>
        <div>
            <h3 style={contentStyle}>2</h3>
        </div>
        <div>
            <h3 style={contentStyle}>3</h3>
        </div>
        <div>
            <h3 style={contentStyle}>4</h3>
        </div>
        </Carousel>
        </>
    )
}

export default CarouselList