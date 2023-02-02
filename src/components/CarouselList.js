import { Collapse, Carousel, Radio } from 'antd';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import { Link } from 'react-router-dom';
import Event from './Event';
import { useState } from 'react';
import pic1 from "./merchImages/1.png";
import pic2 from "./merchImages/2.png";
import pic3 from "./merchImages/3.png";
import pic4 from "./merchImages/4.png";

const contentStyle = {
    maxHeight: '10%',
    color: '#fffff',
    lineHeight: '260px',
    background: '#364d79',
    maxWidth: "100%",
    padding: "100px 100px 100px",
    textAlign: "center",
  };

  const merchStyle={
    color: 'white',
    background: '#364d79',
    margin: "0 ",
    textAlign: "center",
    fontSize: '70px',
    padding: '80px'
  }


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

    const [dotPosition, setDotPosition] = useState('right');
    const handlePositionChange = ({ target: { value } }) => {
      setDotPosition(value);
    };

    
    return (
        <>
        <Radio.Group
        onChange={handlePositionChange}
        value={dotPosition}  
      >
        
      </Radio.Group>
        <Carousel dotPosition={dotPosition} afterChange={onChange}>
        <div className='imagelist'>  <p style={merchStyle}>Check out our merch!</p> 
            <h3 style={contentStyle} className="pic1">
                <Link to="/merch">
                    <img src={pic1}/> </Link>
                    </h3>      
        </div>
        <div>
            <h3 style={contentStyle}>
                <Link to="/merch">
                    <img src={pic2}/></Link>
                    </h3>
        </div>
        <div>
            <h3 style={contentStyle}>
                <Link to="/merch">
                    <img src={pic3}/></Link>
                    </h3>
        </div>
        <div>
            <h3 style={contentStyle}>
                <Link to="/merch">
                    <img src={pic4}/></Link>
                    </h3>
        </div>
        </Carousel>
        </>
    )
}

export default CarouselList